hugo
find public -type f -name '*.html' -exec $(npm bin)/html-minifier {} -c htmlmin.json -o {}.out \; -exec mv {}.out {} \;
apt-get install jpegoptim
apt-get install optipng
cd static/img
jpegoptim *.jpg
optipng *.png