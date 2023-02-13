for i in *.svg;do rsvg-convert -f pdf -o ${i%.*}.pdf $i;done
