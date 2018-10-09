hugo
find public -type f -name '*.html' -exec $(npm bin)/html-minifier {} -c htmlmin.json -o {}.out \; -exec mv {}.out {} \;
find public/js -type f -name '*.js' -exec $(npm bin)/babel {} -o {}.out \; -exec mv {}.out {} \;
sudo apt-get install jpegoptim
sudo apt-get install optipng
cd static/img
jpegoptim *.jpg
# optipng *.png
mv zohoverify ./public