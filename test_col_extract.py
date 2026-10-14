# -*- coding: utf-8 -*-
import pypdf, io, re, json
from PIL import Image
from rapidocr_onnxruntime import RapidOCR

engine = RapidOCR()

def extract_columns(pdf_path, pages):
    reader = pypdf.PdfReader(pdf_path)
    all_text = []
    for p_idx in pages:
        page = reader.pages[p_idx]
        for img_obj in page.images:
            if len(img_obj.data) > 20000:
                img = Image.open(io.BytesIO(img_obj.data))
                w, h = img.size
                # Left
                left = img.crop((0, int(h * 0.07), int(w * 0.505), int(h * 0.95)))
                b_l = io.BytesIO()
                left.save(b_l, format='JPEG')
                res_l, _ = engine(b_l.getvalue())
                if res_l:
                    all_text.extend([r[1] for r in res_l])
                # Right
                right = img.crop((int(w * 0.495), int(h * 0.07), w, int(h * 0.95)))
                b_r = io.BytesIO()
                right.save(b_r, format='JPEG')
                res_r, _ = engine(b_r.getvalue())
                if res_r:
                    all_text.extend([r[1] for r in res_r])
                break
    return all_text

print("Testing extraction on Physics P.17 & P.18...")
phy_text = extract_columns('Physics 11th.pdf', [16, 17])
with open('phy_raw_p17_18.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(phy_text))
print(f"Physics text extracted: {len(phy_text)} lines. Saved to phy_raw_p17_18.txt")
