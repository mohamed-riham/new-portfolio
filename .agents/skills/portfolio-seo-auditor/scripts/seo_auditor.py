import os
import sys
from html.parser import HTMLParser

class SEOMetaParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_text = ""
        self.in_title = False
        self.meta_description = None
        self.meta_viewport = None
        self.og_title = None
        self.og_description = None
        self.og_image = None
        self.og_url = None

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            name = attrs_dict.get("name", "").lower()
            property_attr = attrs_dict.get("property", "").lower()
            content = attrs_dict.get("content", "")

            if name == "description":
                self.meta_description = content
            elif name == "viewport":
                self.meta_viewport = content
            elif property_attr == "og:title":
                self.og_title = content
            elif property_attr == "og:description":
                self.og_description = content
            elif property_attr == "og:image":
                self.og_image = content
            elif property_attr == "og:url":
                self.og_url = content

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title_text += data.strip()

def audit_file(filepath):
    print(f"\nAuditing SEO tags in: {filepath}")
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return False

    parser = SEOMetaParser()
    parser.feed(content)

    issues = []
    successes = []

    # Title check
    if parser.title_text:
        successes.append(f"Title: '{parser.title_text}'")
    else:
        issues.append("Missing or empty <title> tag")

    # Meta Description check
    if parser.meta_description:
        successes.append(f"Meta Description: '{parser.meta_description}'")
    else:
        issues.append("Missing <meta name=\"description\"> tag")

    # Viewport check
    if parser.meta_viewport:
        successes.append(f"Meta Viewport: '{parser.meta_viewport}'")
    else:
        issues.append("Missing <meta name=\"viewport\"> tag")

    # OG tags check
    og_tags = {
        "og:title": parser.og_title,
        "og:description": parser.og_description,
        "og:image": parser.og_image,
        "og:url": parser.og_url
    }
    for tag_name, val in og_tags.items():
        if val:
            successes.append(f"{tag_name}: '{val}'")
        else:
            issues.append(f"Missing Open Graph tag: <meta property=\"{tag_name}\">")

    print("  [PASSED]:")
    for succ in successes:
      print(f"    [OK] {succ}")

    if issues:
      print("  [WARNINGS/ERRORS]:")
      for iss in issues:
        print(f"    [MISSING] {iss}")
      return False

    print("  [SUCCESS] All SEO tags are correct and present!")
    return True

def audit_directory(dirpath):
    print(f"Scanning directory for HTML files: {dirpath}")
    html_files = []
    for root, _, files in os.walk(dirpath):
        for f in files:
            if f.endswith(".html"):
                html_files.append(os.path.join(root, f))

    if not html_files:
        print("No HTML files found.")
        return True

    all_passed = True
    for filepath in html_files:
        if not audit_file(filepath):
            all_passed = False

    return all_passed

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python seo_auditor.py <file_or_directory_path>")
        sys.exit(1)

    target_path = sys.argv[1]
    if os.path.isdir(target_path):
        success = audit_directory(target_path)
    elif os.path.isfile(target_path):
        success = audit_file(target_path)
    else:
        print(f"Path not found: {target_path}")
        sys.exit(1)

    if not success:
        sys.exit(0) # Exiting cleanly but prints issues
