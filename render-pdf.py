import os
import subprocess

def convert_md_to_pdf(root_path):
    for folder, _, files in os.walk(root_path):
        for file in files:
            if file.endswith(".md"):
                md_path = os.path.join(folder, file)
                pdf_path = md_path.replace(".md", ".pdf")

                print(f"Convirtiendo: {md_path}")

                try:
                    subprocess.run(
                        [
                            "pandoc",
                            md_path,
                            "-o", pdf_path,
                            "--pdf-engine=wkhtmltopdf",
                            "-V", "charset=utf-8"
                        ],
                        check=True
                    )
                    print(f"✔ PDF generado: {pdf_path}\n")
                except subprocess.CalledProcessError as e:
                    print(f"❌ Error al convertir {md_path}: {e}\n")

if __name__ == "__main__":
    project_path = os.getcwd()
    print(f"Buscando archivos .md en: {project_path}\n")
    convert_md_to_pdf(project_path)
