var states = {
    "Andhra Pradesh": ["Alluri Sitharama RajuAnakapalli","Anantapuram","Annamayya","Bapatla","ChittoorEast GodavariEluru","Guntur","Kakinada","Konaseema","Krishna","Kurnool","Nandyal","NTR","Palnadu","Parvathipuramu ManyamPrakasam","Sri Potti Sriramulu Nellore","Sri Sathya Sai","Srikakulam","Tirupati","Visakhapatnam","Vizianagaram","West Godavari","YSR Kad"],	   

    "Arunachal Pradesh":["Anjaw","Changlang","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke-Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar Capital"],

    "Assam"	:["Baksa","Barpeta","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],

    "Bihar"	:["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisara","Munger","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],

    "Chhattisgarh":["Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir-champa","Jashpur","Kanker","Kawardha","Korba","Koriya","Mahasamund","Narayanpur","Raigarh","Raipur","Rajnandgaon","Surguja"], 

    "Goa":["North Goa","South Goa"], 

    "Gujarat" :["Ahmedabad","Amreli","Anand","Aravali","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kutch","Kheda","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],

    "Haryana" : ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],

    "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"], 

    "Jharkhand" :["Ranchi","Dhanbad","Giridih","Purbi Singhbhum","Bokaro","Palamu","Hazaribagh","Pashchimi Singhbhum","Deoghar","Garhwa","Dumka","Godda","Sahibganj","Saraikela Kharsawan","Chatra","Gumla","Ramgarh","Pakur","Jamtara","Latehar","Kodarma","Simdega","Khunti","Lohardaga"], 

    "Karnataka"	 :["Bagalkot","Bengaluru Urban","Bengaluru Rural","Belagavi","Ballari","Bidar","Vijayapur","Chamarajanagar","Chikballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Kalaburagi","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Yadgir"],

    "Kerala":["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],

    "Madhya Pradesh":["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwan","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","East Nimar","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Niwari","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha","West NImar"],

    "Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"], 

    "Manipur":["Bishnupur","Thoubal","Imphal East","Imphal West","Senapati","Ukhrul","Chandel","Churachandpur","Tamenglong"], 

    "Meghalaya" :["North Garo Hills","East Garo Hills","South Garo Hills","West Garo Hills","South West Garo Hills","West Jentia Hills","East Jentia Hills","East Khasi Hills","West Khasi Hills","South West Khasi Hills","Eastern West Khasi Hills","Ri-Bhoi"], 

    "Mizoram":["Aizawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Chanphai"], 

    "Nagaland"  :["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto","Noklak"], 

    "Odisha":["Angul","Boudh","Balangir","Bargarh","Balasore","Bhadrak","Cuttack","Deogah","Dhenkanal","Ganjam","Gajapati","Jharsuguda","Jajpur","Jagatsinghpur","Khordha","Keonjhar","Kalahandi","Kandhamal","Koraput","Kendrapara","Malkangiri","Mayurbhanj","Nabarangpur","Nuapada","Nayagarh","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"],

    "Punjab":["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Firozpur","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar","Sangrur","Shahid Bhagat Singh Nagar","Taran Taran"],

    "Rajasthan" :["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalor","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsmand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"], 

    "Sikkim" :["Gangtok","Mangam","Namchi","Geyzing"],    

    "Tamil Nadu" :["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kanchipuram","Kanniyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"], 

    "Telangana" :["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagitial","Jangaon","Jayashankar Bhupalapally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Kumarambheem Asifabad","Mahabubabad","MahabubNagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu","Nagarkurnool","Narayanpet","Nalgonda","Nirmal","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],

    "Tripura" :["Dhalai","Kailasahar","Udaipur","Agartala"], 

    "Uttar Pradesh" :["Agra", "Aligarh", "PrayagRaj", "Ambedkar Nagar"," Amroha"," Auraiya", "Azamgarh"," Badaun", "Bahraich","Ballia"," Balrampur","Banda","Barabanki"," Bareilly","Basti", "Bijnor", "Bulandshahr", "Chandauli(Varanasi Dehat)","Chitrakoot","Deoria", "Etah", "Etawah"," Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Gonda", "Gorakhpur","Hamirpur","Hapur District","Hardoi","Hathras","Jaunpur District", "Jhansi","Kannauj", "Kanpur Dehat","Kanpur Nagar", "Kasganj", "Kaushambi"," Kushinagar"," Lakhimpur","Lalitpur","Lucknow","Maharajganj", "Mahoba", "Mainpuri","Mathura","Mau","Meerut", "Mirzapur","Moradabad","Muzaffarnagar","Pilibhit", "Pratapgarh","Rae Bareli", "Rampur", "Saharanpur", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Sambhal"," Shahjahanpur", "Shamli","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur", "Unnao", "Varanasi","Allahabad", "Amethi", "Bagpat"], 

    "Uttarakhand" :["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"], 

    "West Bengal" :["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Parulia","South 24 Parganas","Uttar Dinajpur"]
}

window.onload = function(){
    var stateSel = document.getElementById("state");
    var citySel = document.getElementById("cities");

    for(var x in states){
        stateSel.options[stateSel.length] = new Option(x,x);
    }
    stateSel.onchange = function () {
        citySel.length = 1; // remove all options from list (index 0)
        if(this.selectedIndex!=-1) {// -1 represents no option is selected
            var cities = states[this.value];
            for(var i=0;i<cities.length;i++) {
                citySel.options[citySel.length] = new Option(cities[i], cities[i]); // value, text to show
            }
        }
    }
}

