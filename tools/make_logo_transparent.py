from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def _color_close(c1: tuple[int, int, int], c2: tuple[int, int, int], tol: int) -> bool:
    return (
        abs(c1[0] - c2[0]) <= tol
        and abs(c1[1] - c2[1]) <= tol
        and abs(c1[2] - c2[2]) <= tol
    )


def make_background_transparent(
    src_path: Path,
    dst_path: Path,
    *,
    tolerance: int = 18,
) -> None:
    """
    Flood-fill from image borders using corner background colors and set alpha=0 for
    border-connected pixels matching those background colors within `tolerance`.
    """

    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    px = img.load()

    corner_samples = [
        px[0, 0][:3],
        px[w - 1, 0][:3],
        px[0, h - 1][:3],
        px[w - 1, h - 1][:3],
    ]
    bg_colors: list[tuple[int, int, int]] = []
    for c in corner_samples:
        if not any(_color_close(c, existing, 0) for existing in bg_colors):
            bg_colors.append(c)

    def is_bg(x: int, y: int) -> bool:
        r, g, b, a = px[x, y]
        if a == 0:
            return True
        return any(_color_close((r, g, b), bg, tolerance) for bg in bg_colors)

    visited = bytearray(w * h)
    q: deque[tuple[int, int]] = deque()

    def enqueue(x: int, y: int) -> None:
        idx = y * w + x
        if visited[idx]:
            return
        visited[idx] = 1
        q.append((x, y))

    # Seed flood fill from all border pixels that match background
    for x in range(w):
        if is_bg(x, 0):
            enqueue(x, 0)
        if is_bg(x, h - 1):
            enqueue(x, h - 1)
    for y in range(h):
        if is_bg(0, y):
            enqueue(0, y)
        if is_bg(w - 1, y):
            enqueue(w - 1, y)

    while q:
        x, y = q.popleft()
        # Mark as transparent
        r, g, b, _a = px[x, y]
        px[x, y] = (r, g, b, 0)

        if x > 0 and is_bg(x - 1, y):
            enqueue(x - 1, y)
        if x + 1 < w and is_bg(x + 1, y):
            enqueue(x + 1, y)
        if y > 0 and is_bg(x, y - 1):
            enqueue(x, y - 1)
        if y + 1 < h and is_bg(x, y + 1):
            enqueue(x, y + 1)

    dst_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst_path)


if __name__ == "__main__":
    root = Path(__file__).resolve().parents[1]
    src = root / "Mountain State Logo (1).png"
    dst = root / "public" / "mst-logo.png"
    make_background_transparent(src, dst)
    print(f"Wrote {dst}")

