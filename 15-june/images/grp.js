//wget -qO- http://google.com/ |
//grep -Eoi '<a [^>]+>' | 
//grep -Eo 'href="[^\"]+"' | 
//grep -Eo '(http|https)://[^/"]+'
//--------------------------------------------------------------
cat sahn.html | grep -Eo "img height=[0-9]* src=[a-zA-Z0-9./?=_-]*" | sort | uniq
