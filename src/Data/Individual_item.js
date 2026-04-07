const categoryProducts = {
  rice: {
    title: "ស្រូវ",
    products: [
      {
        name: "អង្ករស្រូវ",
        price: "៛៣០០០/គីឡូ",
        category: "ស្រូវ",
        description: "អង្ករស្រូវបុរាណដែលដុះនៅតំបន់ទំនាប ក្រអូបឆ្ងាញ់និងសម្បូរជាតិចិញ្ចឹម។ ល្អសម្រាប់ចម្អិនបាយប្រចាំថ្ងៃរបស់គ្រួសារ។",
        img: "/Category Asset/rice.jpg",
        bookmarked: false,
        path: "/product/rice",
        phone: "+855 12 345 601",
        location: "ខេត្តកំពង់ធំ"
      },
      {
        name: "អង្ករដំណើប",
        price: "៛៤០០០/គីឡូ",
        category: "ស្រូវ",
        description: "អង្ករដំណើបសុទ្ធស្អាត ដកស្រង់ចេញពីស្រូវចម្ការដែលគ្មានថ្នាំបាញ់។ មានក្លិនក្រអូបធម្មជាតិ និងអាចចម្អិនបានយ៉ាងលឿន។",
        img: "/Category Asset/jasmine_rice.jpg",
        bookmarked: false,
        path: "/product/jasmine-rice",
        phone: "+855 12 345 602",
        location: "ខេត្តតាកែវ"
      },
      {
        name: "ស្រូវវែង",
        price: "៛៣៥០០/គីឡូ",
        category: "ស្រូវ",
        description: "ស្រូវវែងពូជប្រណីតពីខេត្តបាត់ដំបង មានគ្រាប់ស្តើងវែងនិងក្រអូបពិសេស។ ល្អសម្រាប់ចម្អិនបាយ ឬធ្វើបាយឆ្នើម។",
        img: "/Category Asset/long_grain_rice.jpg",
        bookmarked: false,
        path: "/product/long-grain-rice",
        phone: "+855 12 345 603",
        location: "ខេត្តបាត់ដំបង"
      },
      {
        name: "អង្ករស្រូវក្រហម",
        price: "៛៣០០០/គីឡូ",
        category: "ស្រូវ",
        description: "អង្ករស្រូវក្រហមមានជាតិសរសៃច្រើន ល្អសម្រាប់សុខភាព និងជួយកាត់បន្ថយជាតិស្ករក្នុងឈាម។ ពេញនិយមក្នុងចំណោមអ្នកស្រឡាញ់សុខភាព។",
        img: "/Category Asset/red_rice.jpg",
        bookmarked: false,
        path: "/product/red-rice",
        phone: "+855 12 345 604",
        location: "ខេត្តសៀមរាប"
      },
      {
        name: "អង្ករខ្មៅ",
        price: "៛៥០០០/គីឡូ",
        category: "ស្រូវ",
        description: "អង្ករខ្មៅពូជបុរាណ សម្បូរសារធាតុប្រឆាំងអុកស៊ីតកម្ម និងជាតិសរសៃ។ ក្រអូបហ្មត់ ល្អសម្រាប់ចម្អិនបាយ ឬធ្វើបង្អែម។",
        img: "/Category Asset/black_rice.jpg",
        bookmarked: false,
        path: "/product/black-rice",
        phone: "+855 12 345 605",
        location: "ខេត្តកណ្តាល"
      }
    ]
  },
  grains: {
    title: "គ្រាប់ធញ្ញជាតិ និងគ្រាប់ឈើ",
    products: [
      {
        name: "ពោត",
        price: "៛២០០០/គីឡូ",
        category: "គ្រាប់ធញ្ញជាតិ",
        description: "ពោតស្រស់ ប្រមូលផ្តុំពីចម្ការស្អាតក្នុងខេត្ត ផ្អែមហ្មត់ និងសម្បូរជាតិចិញ្ចឹម។ ល្អសម្រាប់ចម្អិន អាំង ឬស្ងោរទទួលទានផ្ទាល់។",
        img: "/Category_Asset/Grain/corn.png",
        bookmarked: false,
        path: "/product/corn",
        phone: "+855 12 345 606",
        location: "ខេត្តកំពង់ចាម"
      },
      {
        name: "សណ្តែក",
        price: "៛៣០០០/គីឡូ",
        category: "គ្រាប់ធញ្ញជាតិ",
        description: "សណ្តែកស្ងួតគ្រាប់ធំ ស្អាត សម្បូរប្រូតេអ៊ីន និងជាតិដែក។ ល្អសម្រាប់ចម្អិនស៊ុប ឬផ្សំជាម្ហូបប្រចាំថ្ងៃ។",
        img: "/Category_Asset/Grain/bean.png",
        bookmarked: false,
        path: "/product/beans",
        phone: "+855 12 345 607",
        location: "ខេត្តស្វាយរៀង"
      },
      {
        name: "ល្ង",
        price: "៛៤០០០/គីឡូ",
        category: "គ្រាប់ធញ្ញជាតិ",
        description: "ល្ងសសុទ្ធ ស្ងួតស្អាត សម្បូរជាតិខ្លាញ់ល្អ និងកាល់ស្យូម ល្អសម្រាប់សុខភាពឆ្អឹង។ ប្រើបានក្នុងការចម្អិនម្ហូប ឬផ្សំជាប្រេងល្ង។",
        img: "/Category_Asset/Grain/Sesame.png",
        bookmarked: false,
        path: "/product/sesame",
        phone: "+855 12 345 608",
        location: "ខេត្តព្រះវិហារ"
      },
      {
        name: "សណ្តែកសៀង",
        price: "៛៤៥០០/គីឡូ",
        category: "គ្រាប់ធញ្ញជាតិ",
        description: "សណ្តែកសៀងសុទ្ធ សម្បូរប្រូតេអ៊ីន និងជាតិខ្លាញ់ល្អ ល្អសម្រាប់ធ្វើទឹកដោះសៀង។ ប្រើបានផ្សំជាម្ហូប ឬអាហារសុខភាព។",
        img: "/Category_Asset/Grain/soybean.png",
        bookmarked: false,
        path: "/product/soybean",
        phone: "+855 12 345 609",
        location: "ខេត្តកំពង់ស្ពឺ"
      },
      {
        name: "ស្រូវបាឡេ",
        price: "៛៣០០០/គីឡូ",
        category: "គ្រាប់ធញ្ញជាតិ",
        description: "ស្រូវបាឡេសុទ្ធ សម្បូរជាតិសរសៃ និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម។ ល្អសម្រាប់ធ្វើជាអាហារ ឬភេសជ្ជៈ។",
        img: "/Category_Asset/Grain/barley.png",
        bookmarked: false,
        path: "/product/barley",
        phone: "+855 12 345 610",
        location: "ភ្នំពេញ"
      },
      {
        name: "គ្រាប់ស្វាយចន្ទី",
        price: "៛១៥០០០/គីឡូ",
        category: "គ្រាប់ឈើ",
        description: "គ្រាប់ស្វាយចន្ទីស្ងួត ឆ្ងាញ់ ក្រអូប សម្បូរប្រូតេអ៊ីន និងជាតិខ្លាញ់ល្អ។ ល្អញ៉ាំជាអាហារទំនេរ ឬផ្សំក្នុងម្ហូប។",
        img: "/Category_Asset/nuts/cashew.png",
        bookmarked: false,
        path: "/product/cashew",
        phone: "+855 12 345 611",
        location: "ខេត្តកោះកុង"
      },
      {
        name: "គ្រាប់សណ្តែកដី",
        price: "៛៥០០០/គីឡូ",
        category: "គ្រាប់ឈើ",
        description: "គ្រាប់សណ្តែកដីស្ងួត ឆ្ងាញ់ ក្រអូប សម្បូរប្រូតេអ៊ីន និងជាតិខ្លាញ់ល្អ។ ល្អញ៉ាំជាអាហារ ឬផ្សំក្នុងម្ហូបផ្សេង។",
        img: "/Category_Asset/nuts/peanut.png",
        bookmarked: false,
        path: "/product/peanut",
        phone: "+855 12 345 612",
        location: "ខេត្តកំពត"
      },
      {
        name: "គ្រាប់អាល់ម៉ុន",
        price: "៛២៥០០០/គីឡូ",
        category: "គ្រាប់ឈើ",
        description: "គ្រាប់អាល់ម៉ុននាំចូល ស្ងួត ក្រអូប សម្បូរវីតាមីន E និងជាតិខ្លាញ់ល្អ។ ល្អសម្រាប់សុខភាពបេះដូង ញ៉ាំជាអាហារទំនេរ។",
        img: "/Category_Asset/nuts/almond.png ",
        bookmarked: false,
        path: "/product/almond",
        phone: "+855 12 345 613",
        location: "ភ្នំពេញ"
      },
      {
        name: "គ្រាប់វ៉ាល់នាត",
        price: "៛២២០០០/គីឡូ",
        category: "គ្រាប់ឈើ",
        description: "គ្រាប់វ៉ាល់នាតស្ងួត ក្រអូប សម្បូរអូមេហ្គា ៣ ល្អសម្រាប់ខួរក្បាល និងបេះដូង។ ញ៉ាំបានផ្ទាល់ ឬផ្សំក្នុងនំ។",
        img: "../Category Asset/walnut.jpg",
        bookmarked: false,
        path: "/product/walnut",
        phone: "+855 12 345 614",
        location: "ភ្នំពេញ"
      },
      {
        name: "គ្រាប់ម៉ាកាដាមៀ",
        price: "៛៣០០០០/គីឡូ",
        category: "គ្រាប់ឈើ",
        description: "គ្រាប់ម៉ាកាដាមៀស្ងួត ទន់ ក្រអូប ផ្អែម ជាគ្រាប់ប្រណីតពីអូស្ត្រាលី។ សម្បូរជាតិខ្លាញ់ល្អ ល្អសម្រាប់សុខភាពបេះដូង។",
        img: "../Category Asset/macadamia.jpg",
        bookmarked: false,
        path: "/product/macadamia",
        phone: "+855 12 345 615",
        location: "ភ្នំពេញ"
      }
    ]
  },
  vegetables: {
    title: "បន្លែ",
    products: [
      {
        name: "ស្ពៃក្តោប",
        price: "៛២០០០/ដុំ",
        category: "បន្លែ",
        description: "ស្ពៃក្តោបស្រស់ ប្រមូលផ្តុំពីចម្ការស្អាតគ្មានសារធាតុគីមី។ សម្បូរវីតាមីន C និងជាតិសរសៃ ល្អសម្រាប់សុខភាពក្រពះ។",
        img: "/Category_Asset/Vegetables/Cabbage.png",
        bookmarked: false,
        path: "/product/cabbage",
        phone: "+855 12 345 616",
        location: "ខេត្តកំពង់ធំ"
      },
      {
        name: "ត្រសក់",
        price: "៛១០០០/គីឡូ",
        category: "បន្លែ",
        description: "ត្រសក់ស្រស់ស្អាត ជាបន្លែត្រជាក់ដែលសម្បូរទឹក ល្អសម្រាប់បន្ថយកំដៅខ្លួន។ អាចញ៉ាំជាមួយបាយ ឬធ្វើជាម្ហូបសាឡាត់។",
        img: "/Category_Asset/Vegetables/cucumber.png",
        bookmarked: false,
        path: "/product/cucumber",
        phone: "+855 12 345 617",
        location: "ខេត្តតាកែវ"
      },
      {
        name: "ប៉េងប៉ោះ",
        price: "៛២៥០០/គីឡូ",
        category: "បន្លែ",
        description: "ប៉េងប៉ោះស្រស់ ពណ៌ក្រហមស្រស់ស្អាត សម្បូរវីតាមីន A និង C ។ ល្អសម្រាប់ចម្អិនម្ហូប ឬញ៉ាំជាមួយម្ទេសប្រហុក។",
        img: "/Category_Asset/Vegetables/tomato.png",
        bookmarked: false,
        path: "/product/tomato",
        phone: "+855 12 345 618",
        location: "ខេត្តកណ្តាល"
      },
      {
        name: "ការ៉ុត",
        price: "៛២០០០/គីឡូ",
        category: "បន្លែ",
        description: "ការ៉ុតស្រស់ ពណ៌លឿងទុំ សម្បូរវីតាមីន A ល្អសម្រាប់ភ្នែក និងសុខភាពស្បែក។ ញ៉ាំបានទាំងឆៅ ឬចម្អិន។",
        img: "/Category_Asset/Vegetables/carrot.png",
        bookmarked: false,
        path: "/product/carrot",
        phone: "+855 12 345 619",
        location: "ខេត្តបាត់ដំបង"
      },
      {
        name: "បន្លែខៀវ",
        price: "៛៣០០០/គីឡូ",
        category: "បន្លែ",
        description: "បន្លែខៀវស្រស់ ពណ៌បៃតងស្រស់ស្អាត សម្បូរវីតាមីន K និង C ។ ល្អសម្រាប់ចម្អិនឬញ៉ាំស្ងោរជាមួយទឹកជ្រលក់។",
        img: "/Category_Asset/Vegetables/broccoli.png",
        bookmarked: false,
        path: "/product/broccoli",
        phone: "+855 12 345 620",
        location: "ខេត្តសៀមរាប"
      },
      {
        name: "ខ្ទឹម",
        price: "៛៣០០០/គីឡូ",
        category: "បន្លែ",
        description: "ខ្ទឹមស្រស់ ក្លិនក្រអូប ប្រើបានក្នុងការចម្អិនម្ហូបគ្រប់ប្រភេទ។ មានសារធាតុប្រឆាំងបាក់តេរី ល្អសម្រាប់សុខភាព។",
        img: "/Category_Asset/Vegetables/garlic.png",
        bookmarked: false,
        path: "/product/garlic",
        phone: "+855 12 345 621",
        location: "ខេត្តកំពង់ចាម"
      },
      {
        name: "ខ្ទឹមបារាំង",
        price: "៛២០០០/គីឡូ",
        category: "បន្លែ",
        description: "ខ្ទឹមបារាំងស្រស់ ពណ៌ស ឬស្វាយ ក្លិនក្រអូប ប្រើបានក្នុងការចម្អិនទូទៅ។ ល្អផ្សំជាម្ហូបខ្មែរ ឬម្ហូបបរទេស។",
        img: "/Category_Asset/Vegetables/onion.png",
        bookmarked: false,
        path: "/product/onion",
        phone: "+855 12 345 622",
        location: "ខេត្តស្វាយរៀង"
      },
      {
        name: "ល្ពៅ",
        price: "៛២០០០/គីឡូ",
        category: "បន្លែ",
        description: "ល្ពៅស្រស់ ពណ៌លឿង សាច់ក្រាស់ ផ្អែម សម្បូរវីតាមីន A និង C ។ ល្អសម្រាប់ចម្អិនសម្ល ឬបរិភោគជាមួយបាយ។",
        img: "/Category_Asset/Vegetables/pumkin.png",
        bookmarked: false,
        path: "/product/pumpkin",
        phone: "+855 12 345 623",
        location: "ខេត្តកំពត"
      },
      {
        name: "ពោតបន្លែ",
        price: "៛១៥០០/ដើម",
        category: "បន្លែ",
        description: "ពោតបន្លែស្រស់ ផ្អែម ទន់ ប្រមូលចេញពីចម្ការថ្ងៃនោះ។ ល្អស្ងោរ អាំង ឬចម្អិនជាមួយម្ហូបផ្សេង។",
        img: "/Category_Asset/Vegetables/sweet_corn.png",
        bookmarked: false,
        path: "/product/sweet-corn",
        phone: "+855 12 345 624",
        location: "ខេត្តកំពង់ស្ពឺ"
      },
      {
        name: "ស្ពៃ",
        price: "៛១៥០០/គីឡូ",
        category: "បន្លែ",
        description: "ស្ពៃចិនស្រស់ ស្លឹកបៃតង ទន់ ស្អាត ល្អសម្រាប់ចម្អិនបានលឿន។ សម្បូរវីតាមីន និងជាតិសរសៃ ល្អសម្រាប់សុខភាព។",
        img: "/Category_Asset/Vegetables/chinese_cabbage.png",
        bookmarked: false,
        path: "/product/chinese-cabbage",
        phone: "+855 12 345 625",
        location: "ខេត្តព្រះវិហារ"
      }
    ]
  },
  fruits: {
    title: "ផ្លែឈើ",
    products: [
      {
        name: "ទុរេន",
        price: "៛៥០០០/គ្រាប់",
        category: "ផ្លែឈើ",
        description: "ទុរេនពូជស្រុក ពណ៌លឿងស្រស់ មានក្លិនក្រអូបហ្មត់ ឆ្ងាញ់ជូរចត់ពិសេស។ ជ្រើសរើសដោយដៃផ្ទាល់ពីចម្ការ។",
        img: "/Category_Asset/Fruits/Durain.png",
        bookmarked: false,
        path: "/product/durian",
        phone: "+855 12 345 626",
        location: "ខេត្តកោះកុង"
      },
      {
        name: "មង្ឃុត",
        price: "៛៣០០០/គីឡូ",
        category: "ផ្លែឈើ",
        description: "មង្ឃុតស្រស់ ពណ៌ស្ទើរខ្មៅ សាច់ស ហ្ងួតផ្អែម និងត្រជាក់ជ្រុល។ ជារាជាផ្លែឈើខ្មែរ សម្បូរសារធាតុប្រឆាំងអុកស៊ីតកម្ម។",
        img: "/Category_Asset/Fruits/Mangosteen.png",
        bookmarked: false,
        path: "/product/mangosteen",
        phone: "+855 12 345 627",
        location: "ខេត្តកំពត"
      },
      {
        name: "ស្វាយ",
        price: "៛២០០០/គីឡូ",
        category: "ផ្លែឈើ",
        description: "ស្វាយពូជខ្មែរ ផ្អែមក្រអូប ទំហំធំ ប្រមូលដោយផ្ទាល់ពីចម្ការ។ ល្អទទួលទានជាផ្លែឈើ ឬចម្អិនជាម្ហូបប្រហើរ។",
        img: "/Category_Asset/Fruits/Mango.png",
        bookmarked: false,
        path: "/product/mango",
        phone: "+855 12 345 628",
        location: "ខេត្តកណ្តាល"
      },
      {
        name: "ចេក",
        price: "៛១៥០០/ស្និត",
        category: "ផ្លែឈើ",
        description: "ចេកស្រស់ ផ្អែមហ្មត់ ពណ៌លឿងស្រស់ ចេញពីចម្ការធម្មជាតិ។ សម្បូរប៉ូតាស្យូម ល្អសម្រាប់ថាមពលប្រចាំថ្ងៃ។",
        img: "/Category_Asset/Fruits/Banana.png",
        bookmarked: false,
        path: "/product/banana",
        phone: "+855 12 345 629",
        location: "ខេត្តតាកែវ"
      },
      {
        name: "ល្ហុង",
        price: "៛២០០០/ដុំ",
        category: "ផ្លែឈើ",
        description: "ល្ហុងស្រស់ ពណ៌ក្រហមភ្លឺ ផ្អែមស្រួល សម្បូរវីតាមីន C និង A ។ ល្អទទួលទានផ្ទាល់ ឬចម្អិនជាសម្លសម្រាប់ញ៉ាំជាមួយបាយ។",
        img: "/Category_Asset/Fruits/Papaya.png",
        bookmarked: false,
        path: "/product/papaya",
        phone: "+855 12 345 630",
        location: "ខេត្តបាត់ដំបង"
      },
      {
        name: "ដូង",
        price: "៛២៥០០/ដុំ",
        category: "ផ្លែឈើ",
        description: "ដូងស្រស់ ទឹកត្រជាក់ ផ្អែមស្រួល ល្អបន្ថយកំដៅ និងស្រស់ស្រាយ។ សាច់ដូងក្រអូប ប្រើបានច្រើនប្រភេទក្នុងការចម្អិន។",
        img: "/Category_Asset/Fruits/Coconut.png",
        bookmarked: false,
        path: "/product/coconut",
        phone: "+855 12 345 631",
        location: "ខេត្តព្រះសីហនុ"
      },
      {
        name: "ចំការ",
        price: "៛៣០០០/គីឡូ",
        category: "ផ្លែឈើ",
        description: "ចំការទំហំធំ ពណ៌លឿងបៃតង សាច់ក្រាស់ ផ្អែមហ្មត់ ក្រអូបពិសេស។ ល្អញ៉ាំស្រស់ ឬចម្អិនជាម្ហូបជាច្រើនប្រភេទ។",
        img: "/Category_Asset/Fruits/jackfruit.png",
        bookmarked: false,
        path: "/product/jackfruit",
        phone: "+855 12 345 632",
        location: "ខេត្តកំពង់ចាម"
      },
      {
        name: "ក្រូចថ្លុង",
        price: "៛៣០០០/ដុំ",
        category: "ផ្លែឈើ",
        description: "ក្រូចថ្លុងទំហំធំ ស្រស់ ជូរផ្អែម សម្បូរវីតាមីន C ល្អសម្រាប់ប្រព័ន្ធភាពស៊ាំ។ ញ៉ាំបានផ្ទាល់ ឬច្របាច់ទឹក។",
        img: "/Category_Asset/Fruits/pomelo.png",
        bookmarked: false,
        path: "/product/pomelo",
        phone: "+855 12 345 633",
        location: "ខេត្តកំពង់ធំ"
      },
      {
        name: "រំដួល",
        price: "៛២០០០/គីឡូ",
        category: "ផ្លែឈើ",
        description: "រំដួលស្រស់ ផ្អែម ក្រអូប សាច់ទន់ ជាផ្លែឈើខ្មែរដើមពិតប្រាកដ។ ល្អទទួលទានជាអាហារបន្ថែម ឬអំណោយ។",
        img: "/Category_Asset/Fruits/custart_apple.png",
        bookmarked: false,
        path: "/product/custard-apple",
        phone: "+855 12 345 634",
        location: "ខេត្តសៀមរាប"
      },
      {
        name: "ផ្លែប៉ោម",
        price: "៛៥០០០/គីឡូ",
        category: "ផ្លែឈើ",
        description: "ផ្លែប៉ោមនាំចូល ពណ៌ក្រហម ឬបៃតង ផ្អែមជូរ ស្រស់ស្រាយ។ សម្បូរជាតិសរសៃ ល្អសម្រាប់ការរំលាយអាហារ។",
        img: "/Category_Asset/Fruits/apple.png",
        bookmarked: false,
        path: "/product/apple",
        phone: "+855 12 345 635",
        location: "ភ្នំពេញ"
      }
    ]
  },
  "animal-products": {
    title: "សាច់និងផលិតផលសត្វ",
    products: [
      {
        name: "សាច់គោ",
        price: "៛២០០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "សាច់គោស្រស់ ចិញ្ចឹមនៅចម្ការខ្មែរ គ្មានថ្នាំទ្រទ្រង់ ឬហ័រម៉ូន។ ល្អសម្រាប់អាំង ឆ្អិន ឬចម្អិនជាស៊ុបខ្មែរ។",
        img: "../Category Asset/beef.jpg",
        bookmarked: false,
        path: "/product/beef",
        phone: "+855 12 345 636",
        location: "ខេត្តកណ្តាល"
      },
      {
        name: "សាច់ជ្រូក",
        price: "៛១៥០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "សាច់ជ្រូកស្រស់ ចិញ្ចឹមដោយអាហារធម្មជាតិ គ្មានថ្នាំ ឬសារធាតុបន្ថែម។ ទន់ហ្មត់ ឆ្ងាញ់ ស័ក្ដិសមសម្រាប់ចម្អិនម្ហូបបែបខ្មែរ។",
        img: "../Category Asset/pork.jpg",
        bookmarked: false,
        path: "/product/pork",
        phone: "+855 12 345 637",
        location: "ខេត្តតាកែវ"
      },
      {
        name: "សាច់មាន់",
        price: "៛១០០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "សាច់មាន់ស្រស់ ចិញ្ចឹមបែបធម្មជាតិ មានរសជាតិឆ្ងាញ់ ។ ល្អសម្រាប់ចម្អិនម្ហូបគ្រប់ប្រភេទ ទាំងអាំង ឆ្ងាញ់ ឬធ្វើស៊ុប។",
        img: "../Category Asset/chicken.jpg",
        bookmarked: false,
        path: "/product/chicken",
        phone: "+855 12 345 638",
        location: "ខេត្តកំពង់ចាម"
      },
      {
        name: "សាច់ទា",
        price: "៛១២០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "សាច់ទាស្រស់ ចិញ្ចឹមនៅចម្ការ មានរសជាតិក្រអូបពិសេស ខុសពីសាច់មាន់ធម្មតា។ ល្អសម្រាប់ធ្វើស៊ុប ឬអាំងជាមួយគ្រឿងទេស។",
        img: "../Category Asset/duck.jpg",
        bookmarked: false,
        path: "/product/duck",
        phone: "+855 12 345 639",
        location: "ខេត្តកំពង់ធំ"
      },
      {
        name: "សាច់ត្រី",
        price: "៛៨០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "ត្រីស្រស់ចាប់ពីទន្លេ ឬបឹង គ្មានសារធាតុគីមី សម្បូរប្រូតេអ៊ីន និងអូមេហ្គា ៣។ ល្អចម្អិនជាម្ហូបបែបខ្មែរ។",
        img: "../Category Asset/fish.jpg",
        bookmarked: false,
        path: "/product/fish",
        phone: "+855 12 345 640",
        location: "ខេត្តព្រះវិហារ"
      },
      {
        name: "បង្គា",
        price: "៛១៥០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "បង្គាស្រស់ ទើបចាប់ពីទឹក ពណ៌ស្រស់ ក្រអូប ។ ល្អសម្រាប់ចម្អិនឆា អាំង ឬចម្អិនជាមួយម្ហូបផ្សេង។",
        img: "../Category Asset/shrimp.jpg",
        bookmarked: false,
        path: "/product/shrimp",
        phone: "+855 12 345 641",
        location: "ខេត្តព្រះសីហនុ"
      },
      {
        name: "ស៊ុត",
        price: "៛៥០០០/១០គ្រាប់",
        category: "ផលិតផលសត្វ",
        description: "ស៊ុតមាន់ស្រស់ ចិញ្ចឹមបែបធម្មជាតិ មានជាតិប្រូតេអ៊ីន និងវីតាមីន D ។ ល្អសម្រាប់ចម្អិនគ្រប់ប្រភេទ។",
        img: "../Category Asset/egg.jpg",
        bookmarked: false,
        path: "/product/egg",
        phone: "+855 12 345 642",
        location: "ខេត្តកណ្តាល"
      },
      {
        name: "ទឹកដោះគោ",
        price: "៛៤០០០/លីត្រ",
        category: "ផលិតផលសត្វ",
        description: "ទឹកដោះគោស្រស់ ពីចម្ការគោខ្មែរ សម្បូរកាល់ស្យូម និងប្រូតេអ៊ីន ល្អសម្រាប់ឆ្អឹង។ ផឹកបានគ្រប់វ័យ។",
        img: "../Category Asset/milk.jpg",
        bookmarked: false,
        path: "/product/milk",
        phone: "+855 12 345 643",
        location: "ខេត្តកំពង់ស្ពឺ"
      },
      {
        name: "ឈីស",
        price: "៛២០០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "ឈីសសុទ្ធ ផលិតពីទឹកដោះគោស្រស់ ក្រអូបហ្មត់ ល្អផ្សំជាមួយនំប៉័ង ឬម្ហូប។ សម្បូរកាល់ស្យូម ល្អសម្រាប់សុខភាព។",
        img: "../Category Asset/cheese.jpg",
        bookmarked: false,
        path: "/product/cheese",
        phone: "+855 12 345 644",
        location: "ភ្នំពេញ"
      },
      {
        name: "សាច់ចៀម",
        price: "៛២៥០០០/គីឡូ",
        category: "ផលិតផលសត្វ",
        description: "សាច់ចៀមស្រស់ នាំចូលពីប្រទេសជិតខាង ទន់ ក្រអូប ហ្មត់ ។ ល្អសម្រាប់អាំង ឬចម្អិនជាម្ហូបពិសេស។",
        img: "../Category Asset/lamb.jpg",
        bookmarked: false,
        path: "/product/lamb",
        phone: "+855 12 345 645",
        location: "ភ្នំពេញ"
      }
    ]
  }
};

export default categoryProducts;