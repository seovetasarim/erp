from PIL import Image
from pathlib import Path

src = Path(r"C:\Users\A\Desktop\erp\public\logo-mark.png")
out_dir = Path(r"C:\Users\A\Desktop\sds\agntix-nextjs\public")
app_dir = Path(r"C:\Users\A\Desktop\sds\agntix-nextjs\src\app")

img = Image.open(src).convert("RGBA")
px = img.load()
w, h = img.size

TEAL = (12, 70, 66, 255)  # #0C4642
LIME = (160, 255, 39, 255)  # #A0FF27

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 40 and g < 40 and b < 40:
            px[x, y] = (0, 0, 0, 0)
            continue
        if g > 180 and r < 200 and b < 120:
            px[x, y] = LIME
            continue
        if r > 180 and g > 180 and b > 180:
            px[x, y] = TEAL
            continue
        if r > 140 and g > 140 and b > 140 and abs(r - g) < 25 and abs(g - b) < 25:
            px[x, y] = TEAL

bbox = img.getbbox()
if bbox:
    pad = int(min(w, h) * 0.08)
    l, t, r, b = bbox
    l = max(0, l - pad)
    t = max(0, t - pad)
    r = min(w, r + pad)
    b = min(h, b + pad)
    img = img.crop((l, t, r, b))

cw, ch = img.size
side = max(cw, ch)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(img, ((side - cw) // 2, (side - ch) // 2), img)


def save_resized(path: Path, size: int) -> None:
    out = square.resize((size, size), Image.Resampling.LANCZOS)
    out.save(path, "PNG")
    print("wrote", path, size)


save_resized(out_dir / "favicon-32x32.png", 32)
save_resized(out_dir / "favicon-48x48.png", 48)
save_resized(out_dir / "apple-touch-icon.png", 180)
save_resized(out_dir / "icon-512.png", 512)
save_resized(app_dir / "icon.png", 32)
save_resized(app_dir / "apple-icon.png", 180)

try:
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    icos = [square.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]
    icos[0].save(
        out_dir / "favicon.ico",
        format="ICO",
        sizes=ico_sizes,
        append_images=icos[1:],
    )
    print("wrote favicon.ico")
except Exception as e:
    print("ico skip:", e)

print("done")
