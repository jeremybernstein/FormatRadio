/*
This sort method would sort the array as its not an object array . JSON array is an array of objects . Hence  sort method cannot be used directly to sort the array .

array1=["a","z","c","w","j"];
alert(array1.sort( ));*/


var array=[
  {
      "sourcename": "214 free 8-bit bonanza samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627132",
      "name": "214 8-bit bonanza samples (56MB)",
      "key": "157-8-bit-bonanza",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-8-bit-bonanza-samples.zip"
    },
    {
      "sourcename": "502 free '80s samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-233696",
      "name": "502 '80s samples (432MB)",
      "key": "60-eighties",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-eighties-samples.zip"
    },
    {
      "sourcename": "331 free '90s ambient samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627152",
      "name": "331 '90s ambient samples (349MB)",
      "key": "167-90s-ambient",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-90s-ambient-samples.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 90bpm",
      "key": "86-musicradar-abstract-90bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-90bpm.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 100bpm",
      "key": "87-musicradar-abstract-100bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-100bpm.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 120bpm",
      "key": "88-musicradar-abstract-120bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-120bpm.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 130bpm",
      "key": "89-musicradar-abstract-130bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-130bpm.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 140bpm",
      "key": "90-musicradar-abstract-140bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-140bpm.zip"
    },
    {
      "sourcename": "360 free abstract samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-219767",
      "name": "360 Abstract kit 150bpm",
      "key": "91-musicradar-abstract-150bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-abstract-150bpm.zip"
    },
    {
      "sourcename": "266 free acoustic guitar samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-362664",
      "name": "266 Acoustic guitar samples (406MB)",
      "key": "21-acoustic-guitar",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-acoustic-guitar-samples.zip"
    },
    {
      "sourcename": "345 free Afrobeat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-365738",
      "name": "345 Afrobeat samples (159MB)",
      "key": "20-afrobeat",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-afrobeat-samples.zip"
    },
    {
      "sourcename": "363 free alarm and siren samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627144",
      "name": "363 Alarm and siren samples (422MB)",
      "key": "163-alarm-siren",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-alarm-siren-samples.zip"
    },
    {
      "sourcename": "195 free ambient allsort samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-565733",
      "name": "195 Ambient allsort samples (486MB)",
      "key": "139-ambient-allsort",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-ambient-allsort-samples.zip"
    },
    {
      "sourcename": "382 free ambient samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-385417",
      "name": "382 Ambient samples (502MB)",
      "key": "17-ambient",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-ambient-samples.zip"
    },
    {
      "sourcename": "440 free amped samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-411308",
      "name": "440 Amped samples (628MB)",
      "key": "14-amped",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-amped-samples.zip"
    },
    {
      "sourcename": "280 free analogue circuit samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-280-free-analogue-circuit-samples-632922",
      "name": "280 Analogue circuit samples (296MB)",
      "key": "176-analogue-circuit",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-analogue-circuit-samples.zip"
    },
    {
      "sourcename": "586 free analogue drum and bass samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-545703",
      "name": "586 Analogue drum and bass samples (44MB)",
      "key": "128-analogue-drum-bass",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-analogue-drum-bass-samples.zip"
    },
    {
      "sourcename": "261 aquatic adventure samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-575636",
      "name": "261 Aquatic adventure samples (152MB)",
      "key": "151-aquatic-adventure",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-aquatic-adventure-samples.zip"
    },
    {
      "sourcename": "404 free Arabian nights samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-404-free-arabian-nights-samples-636803",
      "name": "404 Arabian Nights samples (291MB)",
      "key": "180-arabian-nights",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-arabian-nights-samples.zip"
    },
    {
      "sourcename": "462 free atmospheric samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-224397",
      "name": "462 Atmospheric samples 1 (358MB)",
      "key": "70-atmospheric-1",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-atmospheric-samples-1.zip"
    },
    {
      "sourcename": "462 free atmospheric samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-224397",
      "name": "462 Atmospheric samples 2 (348MB)",
      "key": "71-atmospheric-2",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-atmospheric-samples-2.zip"
    },
    {
      "sourcename": "289 free battery-powered samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-289-free-battery-powered-samples-635123",
      "name": "289 Battery-powered samples (288MB)",
      "key": "178-battery-powered",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-battery-powered-samples.zip"
    },
    {
      "sourcename": "136 free B-boy electro samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-491004",
      "name": "136 B-boy electro samples (56MB)",
      "key": "101-bboy-electro",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bboy-electro-samples.zip"
    },
    {
      "sourcename": "504 free Balearic bliss samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-231659",
      "name": "504 Balearic bliss samples (506MB)",
      "key": "61-balearic-bliss",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-balearic-bliss-samples.zip"
    },
    {
      "sourcename": "195 free bass boutique samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627150",
      "name": "195 Bass boutique samples (113MB)",
      "key": "166-bass-boutique",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bass-boutique-samples.zip"
    },
    {
      "sourcename": "392 free bass guitar samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-537264",
      "name": "392 Bass guitar samples (231MB)",
      "key": "122-bass-guitar",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bass-guitar-samples.zip"
    },
    {
      "sourcename": "263 free bassline samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-512691",
      "name": "263 Bassline samples (87MB)",
      "key": "109-bassline",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bassline-samples.zip"
    },
    {
      "sourcename": "210 free Berlin beats samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-566185",
      "name": "210 Berlin beats samples (85MB)",
      "key": "140-berlin-beat",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-berlin-beat-samples.zip"
    },
    {
      "sourcename": "321 free bitcrushed samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627130",
      "name": "321 Bitcrushed samples (127MB)",
      "key": "156-bitcrushed",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bitcrushed-samples.zip"
    },
    {
      "sourcename": "50 free Bomb Squad samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-471045",
      "name": "50 Bomb Squad samples (86MB)",
      "key": "5-bomb-squad",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-bomb-squad-samples.zip"
    },
    {
      "sourcename": "355 free breakbeat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222731",
      "name": "355 Breakbeat kit 125bpm",
      "key": "73-musicradar-breakbeat-125bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-breakbeat-125bpm.zip"
    },
    {
      "sourcename": "355 free breakbeat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222731",
      "name": "355 Breakbeat kit 130bpm",
      "key": "74-musicradar-breakbeat-130bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-breakbeat-130bpm.zip"
    },
    {
      "sourcename": "355 free breakbeat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222731",
      "name": "355 Breakbeat kit 135bpm",
      "key": "75-musicradar-breakbeat-135bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-breakbeat-135bpm.zip"
    },
    {
      "sourcename": "355 free breakbeat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222731",
      "name": "355 Breakbeat kit 140bpm",
      "key": "76-musicradar-breakbeat-140bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-breakbeat-140bpm.zip"
    },
    {
      "sourcename": "400 free broken beat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-502882",
      "name": "400 Broken beat samples (151MB)",
      "key": "105-broken-beat",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-broken-beat-samples.zip"
    },
    {
      "sourcename": "792 free carnival rave samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-311426",
      "name": "792 Carnival rave samples (384MB)",
      "key": "27-carnival-rave",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-carnival-rave-samples.zip"
    },
    {
      "sourcename": "438 free cheap synth samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-438-free-cheap-synth-samples-627990",
      "name": "438 Cheap synth samples (307MB)",
      "key": "170-cheap-synth",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-cheap-synth-samples.zip"
    },
    {
      "sourcename": "352 free chillout samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-506250",
      "name": "352 Chillout samples (189MB)",
      "key": "107-chillout",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-chillout-samples.zip"
    },
    {
      "sourcename": "437 free chunky guitar and drum samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-391923",
      "name": "437 Chunky guitar and drum samples (191MB)",
      "key": "181-chunky-guitar-drum",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-chunky-guitar-drum-samples.zip"
    },
    {
      "sourcename": "384 free city nights samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-569490",
      "name": "384 City nights samples (315MB)",
      "key": "143-city-nights",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-city-nights-samples.zip"
    },
    {
      "sourcename": "976 free classic synth samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-225241",
      "name": "976 Synth samples (287MB)",
      "key": "69-synth",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-synth-samples.zip"
    },
    {
      "sourcename": "148 free cosmic soul samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-515677",
      "name": "148 Cosmic soul samples (98MB)",
      "key": "111-cosmic-soul",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-cosmic-soul-samples.zip"
    },
    {
      "sourcename": "259 free country crunk samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-265087",
      "name": "259 Country crunk samples (182MB)",
      "key": "42-country-crunk",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-country-crunk-samples.zip"
    },
    {
      "sourcename": "1,007 free criminal damage samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-230056",
      "name": "1,007 Criminal damage samples (865MB)",
      "key": "62-criminal-damage",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-criminal-damage-samples.zip"
    },
    {
      "sourcename": "295 dance/urban pop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-553817",
      "name": "295 Dance/urban pop samples (141MB)",
      "key": "133-dance-urban-pop",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dance-urban-pop-samples.zip"
    },
    {
      "sourcename": "212 free dancehall samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-250784",
      "name": "212 Dancehall samples (122MB)",
      "key": "48-dancehall",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dancehall-samples.zip"
    },
    {
      "sourcename": "358 free dark dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-318898",
      "name": "358 Dark dub samples (379MB)",
      "key": "26-dark-dub",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dark-dub-samples.zip"
    },
    {
      "sourcename": "201 free deep dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-567845",
      "name": "201 Deep dub samples (161MB)",
      "key": "142-deep-dub",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-deep-dub-samples.zip"
    },
    {
      "sourcename": "204 free dub drums samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-204-free-dub-drums-samples-629201",
      "name": "204 Dub drums samples (90MB)",
      "key": "172-dub-drums",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dub-drums-samples.zip"
    },
    {
      "sourcename": "284 free digital lover samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-549985",
      "name": "284 Digital Lover samples (480MB)",
      "key": "130-digital-lover",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-digital-lover-samples.zip"
    },
    {
      "sourcename": "246 free dirty Dutch house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-544709",
      "name": "246 Dirty Dutch house samples (102MB)",
      "key": "127-dutch-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dutch-house-samples.zip"
    },
    {
      "sourcename": "176 free dirty grime samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-495261",
      "name": "176 Dirty grime samples (96MB)",
      "key": "102-dirty-grime",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dirty-grime-samples.zip"
    },
    {
      "sourcename": "280 free distorted drum loop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-280-free-distorted-drum-loop-samples-634273",
      "name": "280 Distorted drum loop samples (109MB)",
      "key": "177-musicradar-distorted-drum-loops",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-distorted-drum-loops.zip"
    },
    {
      "sourcename": "545 free domestic appliance samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-566738",
      "name": "545 Domestic appliance samples (509MB)",
      "key": "141-domestic-appliance",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-domestic-appliance-samples.zip"
    },
    {
      "sourcename": "1,000 free drum samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-229460",
      "name": "1,000 Drum samples (254MB)",
      "key": "63-drum",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-drum-samples.zip"
    },
    {
      "sourcename": "200 free drum 'n' bass breaks samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-335840",
      "name": "200 Drum 'n' bass breaks samples (110MB)",
      "key": "24-dnb-breaks",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dnb-breaks-samples.zip"
    },
    {
      "sourcename": "200 free drum break samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-522667",
      "name": "200 Drum break samples (158MB)",
      "key": "114-drum-break",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-drum-break-samples.zip"
    },
    {
      "sourcename": "328 free drum 'n' bass samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222244",
      "name": "328 Drum 'n' bass kit 170bpm",
      "key": "77-musicradar-drumnbass-170bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-drumnbass-170bpm.zip"
    },
    {
      "sourcename": "328 free drum 'n' bass samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-222244",
      "name": "328 Drum 'n' bass kit 175bpm",
      "key": "78-musicradar-drumnbass-175bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-drumnbass-175bpm.zip"
    },
    {
      "sourcename": "100 free drum'n'bass atmosphere samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-429444",
      "name": "100 Drum 'n' bass atmosphere samples (523MB)",
      "key": "13-musicradar-dnb-atmospheres",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dnb-atmospheres.zip"
    },
    {
      "sourcename": "100 free drum 'n' bass FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-444650",
      "name": "100 Drum 'n' bass FX samples (148MB)",
      "key": "12-dnb-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dnb-fx-samples.zip"
    },
    {
      "sourcename": "130 free drum 'n' bass pad samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-449476",
      "name": "130 Drum 'n' bass pad samples (417MB)",
      "key": "11-dnb-pad",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dnb-pad-samples.zip"
    },
    {
      "sourcename": "281 free dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-220465",
      "name": "281 Dub kit 126bpm",
      "key": "82-musicradar-dub-126bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dub-126bpm.zip"
    },
    {
      "sourcename": "281 free dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-220465",
      "name": "281 Dub kit 130bpm",
      "key": "83-musicradar-dub-130bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dub-130bpm.zip"
    },
    {
      "sourcename": "281 free dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-220465",
      "name": "281 Dub kit 133bpm",
      "key": "84-musicradar-dub-133bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dub-133bpm.zip"
    },
    {
      "sourcename": "281 free dub samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-220465",
      "name": "281 Dub kit 140bpm",
      "key": "85-musicradar-dub-140bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dub-140bpm.zip"
    },
    {
      "sourcename": "342 free dubstep samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-217768",
      "name": "342 Dubstep kit 01 140bpm",
      "key": "182-Dubstep-kit-01-140bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/Dubstep-kit-01-140bpm.zip"
    },
    {
      "sourcename": "342 free dubstep samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-217768",
      "name": "342 Dubstep kit 02 145bpm",
      "key": "183-Dubstep-kit-02-145bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/Dubstep-kit-02-145bpm.zip"
    },
    {
      "sourcename": "342 free dubstep samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-217768",
      "name": "342 Dubstep kit 03 145bpm",
      "key": "184-Dubstep-kit-03-145bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/Dubstep-kit-03-145bpm.zip"
    },
    {
      "sourcename": "342 free dubstep samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-217768",
      "name": "342 Dubstep kit 04 143bpm",
      "key": "185-Dubstep-kit-04-143bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/Dubstep-kit-04-143bpm.zip"
    },
    {
      "sourcename": "342 free dubstep samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-217768",
      "name": "342 Dubstep kit 05 140bpm",
      "key": "186-Dubstep-kit-05-140bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/Dubstep-kit-05-140bpm.zip"
    },
    {
      "sourcename": "160 free dubstep bonus samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-264294",
      "name": "160 Dubstep bonus samples (119MB)",
      "key": "43-dubstep-bonus",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dubstep-bonus-samples.zip"
    },
    {
      "sourcename": "160 free dubstep bonus samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-263159",
      "name": "160 Dubstep bonus samples (119MB)",
      "key": "43-dubstep-bonus",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-dubstep-bonus-samples.zip"
    },
    {
      "sourcename": "721 free electro house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-282831",
      "name": "721 Electro house samples (250MB)",
      "key": "33-electro-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-electro-house-samples.zip"
    },
    {
      "sourcename": "220 free electronic pop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-463337",
      "name": "220 Electronic pop samples (413MB)",
      "key": "7-electronic-pop",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-electronic-pop-samples.zip"
    },
    {
      "sourcename": "451 free emo samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-479864",
      "name": "451 emo samples (273MB)",
      "key": "3-emo",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-emo-samples.zip"
    },
    {
      "sourcename": "200 free experimental lead samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-555523",
      "name": "200 Experimental lead samples (335MB)",
      "key": "135-experimental-lead",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-experimental-lead-samples.zip"
    },
    {
      "sourcename": "100 free experimental samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-453606",
      "name": "100 Experimental samples (321MB)",
      "key": "10-experimental",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-experimental-samples.zip"
    },
    {
      "sourcename": "193 free extreme bass samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-513968",
      "name": "193 Extreme bass samples (55MB)",
      "key": "110-extreme-bass",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-extreme-bass-samples.zip"
    },
    {
      "sourcename": "171 free feedback samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-453706",
      "name": "171 Feedback samples (89MB)",
      "key": "9-feedback",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-feedback-samples.zip"
    },
    {
      "sourcename": "242 free feelgood samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-474794",
      "name": "242 Feelgood samples (318MB)",
      "key": "4-feelgood",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-feelgood-samples.zip"
    },
    {
      "sourcename": "1,338 free female vocal samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-275492",
      "name": "1,338 Female vocal samples (426MB)",
      "key": "38-female-vocal",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-female-vocal-samples.zip"
    },
    {
      "sourcename": "294 free filthy hippy samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-279610",
      "name": "294 Filthy hippy samples (230MB)",
      "key": "35-filthy-hippy",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-filthy-hippy-samples.zip"
    },
    {
      "sourcename": "563 free floor-filling samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-559594",
      "name": "563 Floor-filling samples (264MB)",
      "key": "136-floorfilling",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-floorfilling-samples.zip"
    },
    {
      "sourcename": "398 free found sound samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-532562",
      "name": "398 Found sound samples (221MB)",
      "key": "119-found-sound",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-found-sound-samples.zip"
    },
    {
      "sourcename": "189 free French house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627128",
      "name": "189 French House chillout samples (107MB)",
      "key": "155-french-house-chillout",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-french-house-chillout-samples.zip"
    },
    {
      "sourcename": "376 free funk samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-228702",
      "name": "376 Funk samples (164MB)",
      "key": "65-funk",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-funk-samples.zip"
    },
    {
      "sourcename": "289 free funk guitar samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-518861",
      "name": "289 Funk guitar samples (273MB)",
      "key": "112-funk-guitar",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-funk-guitar-samples.zip"
    },
    {
      "sourcename": "338 free FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-287277",
      "name": "338 FX samples (453MB)",
      "key": "56-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-fx-samples.zip"
    },
    {
      "sourcename": "395 free FX and sweetener samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-236648",
      "name": "395 FX samples (263MB)",
      "key": "56-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-fx-samples.zip"
    },
    {
      "sourcename": "395 free FX and sweetener samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-236648",
      "name": "395 Sweetener samples (332MB)",
      "key": "57-sweetener",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-sweetener-samples.zip"
    },
    {
      "sourcename": "456 free great outdoors samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627152%22",
      "name": "456 '90s ambient samples (349MB)",
      "key": "167-90s-ambient",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-90s-ambient-samples.zip"
    },
    {
      "sourcename": "703 free grime samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-225947",
      "name": "703 Grime samples (380MB)",
      "key": "68-grime",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-grime-samples.zip"
    },
    {
      "sourcename": "272 free guitar and bass samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-240528",
      "name": "272 Guitar and bass samples (95MB)",
      "key": "52-guitar-bass",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-guitar-bass-samples.zip"
    },
    {
      "sourcename": "216 free guitar drone samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627146",
      "name": "216 Guitar drone samples (108MB)",
      "key": "164-guitar-drone",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-guitar-drone-samples.zip"
    },
    {
      "sourcename": "300 free hand control samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-500720",
      "name": "300 Hand control samples (411MB)",
      "key": "104-hand-control",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-hand-control-samples.zip"
    },
    {
      "sourcename": "252 free heavy metal drum samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-249396",
      "name": "252 Heavy metal drum samples (123MB)",
      "key": "50-metal-drum",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-metal-drum-samples.zip"
    },
    {
      "sourcename": "400 free heavy metal guitar samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-228007",
      "name": "400 Heavy metal guitar samples (568MB)",
      "key": "66-heavy-metal",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-heavy-metal-samples.zip"
    },
    {
      "sourcename": "303 free Hi-NRG samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-278470",
      "name": "303 Hi-NRG samples (298MB)",
      "key": "36-hi-nrg",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-hi-nrg-samples.zip"
    },
    {
      "sourcename": "316 free hip-hop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-248617",
      "name": "316 Hip-hop samples (278MB)",
      "key": "51-hiphop",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-hiphop-samples.zip"
    },
    {
      "sourcename": "332 free hip-rock samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-572060",
      "name": "332 Hip-rock samples (256MB)",
      "key": "147-hip-rock",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-hip-rock-samples.zip"
    },
    {
      "sourcename": "196 free horrorscape samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627138",
      "name": "196 Horrorscape samples (210MB)",
      "key": "160-horrorscape",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-horrorscape-samples.zip"
    },
    {
      "sourcename": "338 free house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-267013",
      "name": "338 House samples (394MB)",
      "key": "41-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-house-samples.zip"
    },
    {
      "sourcename": "500 free IDM samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-540381",
      "name": "500 IDM samples (292MB)",
      "key": "123-idm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-idm-samples.zip"
    },
    {
      "sourcename": "500 free industrial samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-504614",
      "name": "500 Industrial samples (466MB)",
      "key": "106-industrial",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-industrial-samples.zip"
    },
    {
      "sourcename": "152 free industrial metal samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-536065",
      "name": "152 Industrial metal samples (84MB)",
      "key": "121-industrial-metal",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-industrial-metal-samples.zip"
    },
    {
      "sourcename": "246 free italo disco samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-253756",
      "name": "246 Italo disco samples (167MB)",
      "key": "47-italodisco",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-italodisco-samples.zip"
    },
    {
      "sourcename": "326 free jackin' house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-560360",
      "name": "326 Jackin house samples (92MB)",
      "key": "137-jacking-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-jacking-house-samples.zip"
    },
    {
      "sourcename": "466 free jazz club samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-291818",
      "name": "466 Jazz Club samples (460MB)",
      "key": "29-jazz-club",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-jazz-club-samples.zip"
    },
    {
      "sourcename": "626 free jazz groove samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-552020",
      "name": "626 Jazz groove samples (375MB)",
      "key": "132-jazz-groove",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-jazz-groove-samples.zip"
    },
    {
      "sourcename": "223 free Jen SX1000 samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-526737",
      "name": "223 Jen SX1000 samples (106MB)",
      "key": "116-jensx1000",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-jensx1000-samples.zip"
    },
    {
      "sourcename": "408 free layering samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-408-free-layering-samples-630976",
      "name": "408 Layering samples (215MB)",
      "key": "174-layering",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-layering-samples.zip"
    },
    {
      "sourcename": "212 free lo-fi punk disco samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-239032",
      "name": "212 Lo-fi punk disco samples (94MB)",
      "key": "53-lofi-punk-disco",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-lofi-punk-disco-samples.zip"
    },
    {
      "sourcename": "587 free lo-fi samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-227138",
      "name": "587 Lo-fi samples (168MB)",
      "key": "67-lofi",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-lofi-samples.zip"
    },
    {
      "sourcename": "166 free lounge samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-488005",
      "name": "166 Lounge samples (230MB)",
      "key": "100-lounge",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-lounge-samples.zip"
    },
    {
      "sourcename": "500 free loungekore samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-237476",
      "name": "500 Loungekore samples (313MB)",
      "key": "55-loungekore",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-loungekore-samples.zip"
    },
    {
      "sourcename": "307 free loved-up samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-250195",
      "name": "307 Loved-up samples (264MB)",
      "key": "49-loved-up",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-loved-up-samples.zip"
    },
    {
      "sourcename": "350 free minimal house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-281194",
      "name": "350 Minimal house samples (134MB)",
      "key": "34-minimal-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-minimal-house-samples.zip"
    },
    {
      "sourcename": "50 free Mistabishi DnB and dubstep",
      "source": "http://www.musicradar.com/news/tech/sampleradar-484521",
      "name": "50 Mistabishi samples (136MB)",
      "key": "1-mistabishi",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-mistabishi-samples.zip"
    },
    {
      "sourcename": "204 free modular madness samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627126%22",
      "name": "204 Modular madness samples (142MB)",
      "key": "154-modular-madness",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-modular-madness-samples.zip"
    },
    {
      "sourcename": "250 free modular synth samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-528002",
      "name": "250 Modular synth samples (209MB)",
      "key": "117-modular-synth",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-modular-synth-samples.zip"
    },
    {
      "sourcename": "483 free movie soundtrack samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-258893",
      "name": "483 Movie soundtrack samples (298MB)",
      "key": "45-soundtrack",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-soundtrack-samples.zip"
    },
    {
      "sourcename": "253 free nu Balearic samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-548977",
      "name": "253 Nu Balearic samples (112MB)",
      "key": "129-nu-balearic",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-nu-balearic-samples.zip"
    },
    {
      "sourcename": "426 free nu-disco samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-424505",
      "name": "426 Nu-disco samples (306MB)",
      "key": "187-nu-disco",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-nu-disco-samples.zip"
    },
    {
      "sourcename": "318 free old-school rave samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-356800",
      "name": "318 Old-School rave samples (108MB)",
      "key": "23-rave",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-rave-samples.zip"
    },
    {
      "sourcename": "464 free out there FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-554577",
      "name": "464 Out there FX samples (287MB)",
      "key": "134-out-there-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-out-there-fx-samples.zip"
    },
    {
      "sourcename": "316 free Parisian-style samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-235771",
      "name": "316 Parisian-style samples (123MB)",
      "key": "58-paris",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-paris-samples.zip"
    },
    {
      "sourcename": "301 free percussion loops",
      "source": "http://www.musicradar.com/news/tech/sampleradar-238205",
      "name": "301 Percussion loops (155MB)",
      "key": "54-percussion-loops",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-percussion-loops.zip"
    },
    {
      "sourcename": "204 free percussion samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-523942",
      "name": "204 Percussion samples (39.2MB)",
      "key": "115-percussion",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-percussion-samples.zip"
    },
    {
      "sourcename": "462 free pop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-406182",
      "name": "462 Pop samples (283MB)",
      "key": "15-pop",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-pop-samples.zip"
    },
    {
      "sourcename": "347 free prog rock samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-271141",
      "name": "347 Prog rock samples (352MB)",
      "key": "39-prog-rock",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-prog-rock-samples.zip"
    },
    {
      "sourcename": "225 free pure evil samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-570632",
      "name": "225 Pure evil samples (148MB)",
      "key": "144-pure-evil",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-pure-evil-samples.zip"
    },
    {
      "sourcename": "496 free random sequence samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-543634",
      "name": "496 Random sequence samples (254MB)",
      "key": "126-random-sequence",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-random-sequence-samples.zip"
    },
    {
      "sourcename": "285 free real-world drum samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-533702",
      "name": "285 Real-world drum samples (93MB)",
      "key": "120-realworld-drum",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-realworld-drum-samples.zip"
    },
    {
      "sourcename": "286 free real-world FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-467432",
      "name": "286 Real-world FX samples (365MB)",
      "key": "6-real-world-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-real-world-fx-samples.zip"
    },
    {
      "sourcename": "227 free remix samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-372220",
      "name": "227 Remix samples (213MB)",
      "key": "19-remix",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-remix-samples.zip"
    },
    {
      "sourcename": "546 free retro and degraded samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-234855",
      "name": "546 Retro and degraded samples (312MB)",
      "key": "59-retro",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-retro-samples.zip"
    },
    {
      "sourcename": "330 free retro house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-330-free-retro-house-samples-637779",
      "name": "330 Retro house samples (194MB)",
      "key": "188-retro-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-retro-house-samples.zip"
    },
    {
      "sourcename": "223 free retro video game samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-497832",
      "name": "223 Retro video game samples (108MB)",
      "key": "103-retro-video-game",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-retro-video-game-samples.zip"
    },
    {
      "sourcename": "449 free reversed samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627148",
      "name": "449 Reversed samples (273MB)",
      "key": "165-reversed",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-reversed-samples.zip"
    },
    {
      "sourcename": "586 free rise of the robotsamples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-574431",
      "name": "586 Rise of the robots samples (493MB)",
      "key": "148-robot",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-robot-samples.zip"
    },
    {
      "sourcename": "713 free robotic synthpop samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-401646",
      "name": "713 Robotic synthpop samples (185MB)",
      "key": "16-robotic-synthpop",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-robotic-synthpop-samples.zip"
    },
    {
      "sourcename": "123 free Roland SH-101 synth samples.",
      "source": "http://www.musicradar.com/news/tech/sampleradar-529084",
      "name": "123 Roland SH-101 samples (157MB)",
      "key": "118-roland-sh101",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-roland-sh101-samples.zip"
    },
    {
      "sourcename": "464 free sci-fi samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-464-free-sci-fi-samples-632239",
      "name": "464 Sci-fi samples (255MB)",
      "key": "175-sci-fi",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-sci-fi-samples.zip"
    },
    {
      "sourcename": "320 free ska samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-269269",
      "name": "320 Ska samples (371MB)",
      "key": "40-ska",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-ska-samples.zip"
    },
    {
      "sourcename": "235 free songwriter's samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-284852",
      "name": "235 Songwriter's samples (265MB)",
      "key": "32-songwriter",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-songwriter-samples.zip"
    },
    {
      "sourcename": "393 free soul and funk samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-378865",
      "name": "393 Soul and funk samples (213MB)",
      "key": "18-soul-funk",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-soul-funk-samples.zip"
    },
    {
      "sourcename": "161 free stadium house samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-571813",
      "name": "161 Stadium house samples (89MB)",
      "key": "146-stadium-house",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-stadium-house-samples.zip"
    },
    {
      "sourcename": "366 free sparse soundscape samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-366-free-sparse-soundscape-samples-637937",
      "name": "366 Sparse soundscape samples (421MB)",
      "key": "189-sparse-soundscape",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-sparse-soundscape-samples.zip"
    },
    {
      "sourcename": "320 free stretched samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-320-free-stretched-samples-636029",
      "name": "320 Stretched samples (294MB)",
      "key": "179-stretched",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-stretched-samples.zip"
    },
    {
      "sourcename": "296 free sugarcoated samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627122",
      "name": "296 Sugarcoated samples (152MB)",
      "key": "152-sugarcoated",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-sugarcoated-samples.zip"
    },
    {
      "sourcename": "215 free summer lovin' samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-254795",
      "name": "215 Summer lovin' samples (186MB)",
      "key": "46-summer-lovin",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-summer-lovin-samples.zip"
    },
    {
      "sourcename": "503 free synth arpeggio samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-483230",
      "name": "503 Synth arpeggio samples (182MB)",
      "key": "2-synth-arpeggio",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-synth-arpeggio-samples.zip"
    },
    {
      "sourcename": "190 free synth percussion samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-571088",
      "name": "190 Synth percussion samples (115MB)",
      "key": "145-synth-percussion",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-synth-percussion-samples.zip"
    },
    {
      "sourcename": "503 free techno samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-218884",
      "name": "503 Techno kit 120bpm",
      "key": "92-musicradar-techno-120bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-120bpm.zip"
    },
    {
      "sourcename": "503 free techno samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-218884",
      "name": "503 Techno kit 125bpm",
      "key": "190-musicradar-techno-125bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-125bpm.zip"
    },
    {
      "sourcename": "503 free techno samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-218884",
      "name": "503 Techno kit 130bpm",
      "key": "93-musicradar-techno-130bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-130bpm.zip"
    },
    {
      "sourcename": "503 free techno samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-218884",
      "name": "503 Techno kit 132bpm",
      "key": "94-musicradar-techno-132bpm",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-132bpm.zip"
    },
    {
      "sourcename": "441 free techno atmosphere samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-519892",
      "name": "441 Techno atmosphere samples (560MB)",
      "key": "113-techno-atmos",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-atmos-samples.zip"
    },
    {
      "sourcename": "494 free techno drum and FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-550889",
      "name": "494 Techno drum and FX samples (160MB)",
      "key": "131-techno-drum-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-techno-drum-fx-samples.zip"
    },
    {
      "sourcename": "556 free timewarp FX samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-556-free-timewarp-fx-samples-637074",
      "name": "556 Timewarp FX samples (564MB)",
      "key": "191-timewarp-fx",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-timewarp-fx-samples.zip"
    },
    {
      "sourcename": "293 free trance samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-223498",
      "name": "293 Trance samples (510MB)",
      "key": "72-trance",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-trance-samples.zip"
    },
    {
      "sourcename": "193 free trance basics samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-575202",
      "name": "193 Trance basics samples (128MB)",
      "key": "150-trance-basics",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-trance-basics-samples.zip"
    },
    {
      "sourcename": "382 free trance essentials samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-507874",
      "name": "382 Trance essentials samples (521MB)",
      "key": "108-trance-essentials",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-trance-essentials-samples.zip"
    },
    {
      "sourcename": "300 free trap samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627140",
      "name": "300 Trap samples (107MB)",
      "key": "161-trap",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-trap-samples.zip"
    },
    {
      "sourcename": "592 free tuneful toy samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-574741",
      "name": "592 Tuneful toys samples (150MB)",
      "key": "149-tuneful-toy",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-tuneful-toy-samples.zip"
    },
    {
      "sourcename": "300 free twisted orchestra samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-260569",
      "name": "300 Twisted orchestra samples (472MB)",
      "key": "44-twisted-orchestra",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-twisted-orchestra-samples.zip"
    },
    {
      "sourcename": "316 free UK garage samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-316-free-uk-garage-samples-629719",
      "name": "316 UK garage samples (246MB)",
      "key": "173-uk-garage",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-uk-garage-samples.zip"
    },
    {
      "sourcename": "300 free undercover samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627142",
      "name": "300 Undercover samples (313MB)",
      "key": "162-undercover",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-undercover-samples.zip"
    },
    {
      "sourcename": "429 free upfront house percussion samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-360922",
      "name": "429 Upfront house percussion samples (723MB)",
      "key": "22-house-percussion",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-house-percussion-samples.zip"
    },
    {
      "sourcename": "199 free uplifting samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-288822",
      "name": "199 Uplifting samples (674MB)",
      "key": "30-uplifting",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-uplifting-samples.zip"
    },
    {
      "sourcename": "162 free urban rock samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-306390",
      "name": "162 Urban rock samples (188bpm)",
      "key": "28-urban-rock",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-urban-rock-samples.zip"
    },
    {
      "sourcename": "45 free Vince Watson techno samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-459520",
      "name": "45 Vince Watson techno samples (74MB)",
      "key": "8-vince-watson",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-vince-watson-samples.zip"
    },
    {
      "sourcename": "243 free vinyl-style samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-277010",
      "name": "243 Vinyl-style samples (106MB)",
      "key": "37-vinyl-style",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-vinyl-style-samples.zip"
    },
    {
      "sourcename": "327 free vocal ad-lib samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-564055",
      "name": "327 Vocal ad-lib samples (237MB)",
      "key": "138-vocal-adlib",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-vocal-adlib-samples.zip"
    },
    {
      "sourcename": "229 free Wavedrum samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-541566",
      "name": "229 Wavedrum samples (184MB)",
      "key": "124-wavedrum",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-wavedrum-samples.zip"
    },
    {
      "sourcename": "174 free western guitar samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-627124",
      "name": "174 Western guitar samples (211MB)",
      "key": "153-western-guitar",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-western-guitar-samples.zip"
    },
    {
      "sourcename": "236 free wonky step samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-328102",
      "name": "236 Wonky step samples (80MB)",
      "key": "25-wonky-steps",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-wonky-steps-samples.zip"
    },
    {
      "sourcename": "204 free world music samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-542733",
      "name": "204 World music samples (72MB)",
      "key": "125-world-music",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-world-music-samples.zip"
    },

    {
      "key": "31-fx",
      "name": "338 FX samples (453MB)",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-fx-samples.zip",
      "source": "http://www.musicradar.com/news/tech/sampleradar-287277"
    },
    {
      "key": "158-noise-hiss-crackle",
      "name": "502 Noise, hiss and crackle samples (263MB)",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-noise-hiss-crackle-samples.zip",
      "source": "http://www.musicradar.com/news/tech/free-music-samples-download-loops-hits-and-multis-217833/138"
    },
    {
      "key": "159-crate-diggers",
      "name": "475 Crate digger's samples (292MB)",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-crate-digger-samples.zip",
      "source": "http://www.musicradar.com/news/tech/free-music-samples-download-loops-hits-and-multis-217833/139"
    },
    {
      "key": "168-outdoor",
      "name": "475 Great outdoors samples (444MB)",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-outdoor-samples.zip",
      "source": "http://www.musicradar.com/news/tech/sampleradar-456-free-great-outdoors-samples-627154"
    },
    {
      "sourcename": "235 free '80s heat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-235-free-80s-heat-samples-628852",
      "name": "235 '80s heat samples (198MB)",
      "key": "171-80s-heat",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-80s-heat-samples.zip"
    },
    {
      "sourcename": "357 free Prodigy-style samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-221323",
      "name": "357 Prodigy-style kit 115bpm",
      "key": "79-prodigy-style-115bpm",
      "url": "http://mos.musicradar.com/audio/samples/musicradar-prodigy-style-115bpm.zip"
    },
    {
      "sourcename": "357 free Prodigy-style samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-221323",
      "name": "357 Prodigy-style kit 125bpm",
      "key": "80-prodigy-style-125bpm",
      "url": "http://mos.musicradar.com/audio/samples/musicradar-prodigy-style-125bpm.zip"
    },
    {
      "sourcename": "357 free Prodigy-style samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-221323",
      "name": "357 Prodigy-style kit 126bpm",
      "key": "81-prodigy-style-126bpm",
      "url": "http://mos.musicradar.com/audio/samples/musicradar-prodigy-style-126bpm.zip"
    },
    {
      "sourcename": "477 free ultimate hi-hat samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-477-free-ultimate-hi-hat-samples-639419",
      "name": "Ultimate hit-hat samples (150MB)",
      "key": "192-ultimate-hi-hat",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-ultimate-hihat-samples.zip"
    },
    {
      "sourcename": "410 free filter fun samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-410-free-filter-fun-samples-639976",
      "name": "Filter fun samples (566MB)",
      "key": "193-filter-fun",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-filter-fun-samples.zip"
    },
    {
      "sourcename": "459 free instant drum fill samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-459-free-instant-drum-fill-samples-640342",
      "name": "Instant drum fill samples (229MB)",
      "key": "194-instant-drum-fill",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-instant-fill-samples.zip"
    },
    {
      "sourcename": "293 free cinematic drama samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-293-free-cinematic-drama-samples-641124",
      "name": "Cinematic drama samples (355MB)",
      "key": "195-cinematic-drama",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-cinematic-drama-samples.zip"
    },
    {
      "sourcename": "306 free off the grid samples",
      "source": "http://www.musicradar.com/news/tech/sampleradar-306-free-off-the-grid-samples-642030",
      "name": "Off the grid samples (183MB)",
      "key": "196-off-the-grid",
      "url": "http://cdn.mos.musicradar.com/audio/samples/musicradar-off-the-grid-samples.zip"
    },

    {
      "key": "answer-phone-tumblr",
      "name": "191 Answering Machine Recordings (1.4GB)",
      "url": "http://www.oomst.com/thonk/3rd-Party/AnswerPhoneCard1.zip",
      "source": "http://answerphone.tumblr.com",
      "path": "/OrganizedCard/",
      "mode": "convertOnly"
    }
];

function GetSortOrder(prop){
   return function(a,b){
      var akey = a[prop];
      var bkey = b[prop];

      var amatch = akey.match(/^(\d+)\-/);
      var bmatch = bkey.match(/^(\d+)\-/);
      if (amatch && bmatch) {
        if (parseInt(amatch) > parseInt(bmatch)) return 1;
        else if (parseInt(amatch) < parseInt(bmatch)) return -1;
        else return 0;
      } else {
        if (a[prop] > b[prop]){
            return 1;
        } else if(a[prop] < b[prop]){
            return -1;
        }
      }
      return 0;
   }
}

array.sort( GetSortOrder("key") );
console.log(JSON.stringify(array, null, 2));
