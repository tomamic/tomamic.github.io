#!/usr/bin/env python3
import glob, re

slides = glob.glob('mdp/*.mdp')
text = "".join(open(f).read() for f in slides)
refs = set(re.findall(r"(?<=\()images/[^\)]+", text))
images = set(f for f in glob.glob('images/**/*') if f[-4:] != ".dia")
print("Broken references: ", refs - images)
print("Unused images: ", images - refs)
