const decPics = ["PA LOg\\dec\\dec1am.jpg", "PA LOg\\dec\\dec1pm.jpg", "PA LOg\\dec\\dec2am.jpg", "PA LOg\\dec\\dec2pm.jpg", "PA LOg\\dec\\dec3am.jpg", "PA LOg\\dec\\dec3pm.jpg", "PA LOg\\dec\\dec7am.jpg", "PA LOg\\dec\\dec7pm.jpg", "PA LOg\\dec\\dec9am.jpg", "PA LOg\\dec\\dec9pm.jpg", "PA LOg\\dec\\dec10am.jpg", "PA LOg\\dec\\dec10pm.jpg", "PA LOg\\dec\\dec11am.jpg", "PA LOg\\dec\\dec14am.jpg", "PA LOg\\dec\\dec14pm.jpg", "PA LOg\\dec\\dec15_pm.jpg", "PA LOg\\dec\\dec16am.jpg", "PA LOg\\dec\\dec16pm.jpg", "PA LOg\\dec\\IMG_20201129_09211671.jpg","PA LOg\\dec\\IMG_20201129_09212297.jpg", "PA LOg\\dec\\IMG_20201129_09213637.jpg","PA LOg\\dec\\IMG_20201129_09220770.jpg","PA LOg\\dec\\IMG_20201129_09223827.jpg","PA LOg\\dec\\IMG_20201129_09231503.jpg","PA LOg\\dec\\IMG_20201129_09232012.jpg","PA LOg\\dec\\IMG_20201129_09232355.jpg","PA LOg\\dec\\IMG_20210124_21371366.jpg","PA LOg\\dec\\IMG20191204064611_01.jpg","PA LOg\\dec\\IMG20191206165915.jpg","PA LOg\\dec\\IMG20210108172026.jpg","PA LOg\\dec\\IMG20210108172107.jpg","PA LOg\\dec\\IMG20210108172140.jpg","PA LOg\\dec\\IMG20210108172156.jpg","PA LOg\\dec\\IMG20210108172552.jpg","PA LOg\\dec\\IMG20210108172616.jpg","PA LOg\\dec\\IMG20210108172630.jpg","PA LOg\\dec\\IMG20210108172650.jpg","PA LOg\\dec\\IMG20210108173227.jpg","PA LOg\\dec\\IMG20210108173229.jpg","PA LOg\\dec\\IMG20210108173327.jpg","PA LOg\\dec\\IMG20210108173341.jpg", "PA LOg\\dec\\sept25_swimming.jpg","PA LOg\\dec\\sept30_swimming.jpg","PA LOg\\dec\\vlcsnap-2021-02-06-11h25m38s103.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h25m50s615.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h26m08s215.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h26m15s517.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h26m29s962.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h26m36s284.png", "PA LOg\\dec\\vlcsnap-2021-02-06-11h26m44s045.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h27m18s998.png","PA LOg\\dec\\vlcsnap-2021-02-06-11h27m31s719.png"];
const octPics = ["PA LOg\\oct\\vlcsnap-2021-02-06-11h42m58s011.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m03s754.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m10s904.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m20s586.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m30s829.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m42s145.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m44s831.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m50s071.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h43m58s038.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h44m03s545.png", "PA LOg\\oct\\oct13.jpg","PA LOg\\oct\\oct14_am.jpg","PA LOg\\oct\\oct14_pm.jpg","PA LOg\\oct\\oct15_am.jpg","PA LOg\\oct\\oct15_pm.jpg","PA LOg\\oct\\septhiit1.png","PA LOg\\oct\\septhiit2.png","PA LOg\\oct\\septhiit3.png", "PA LOg\\oct\\septhiit4.png","PA LOg\\oct\\septhiit5.png","PA LOg\\oct\\septhiit5.png","PA LOg\\oct\\septhiit6.png","PA LOg\\oct\\septhiit7.png","PA LOg\\oct\\septhiit9.png","PA LOg\\oct\\septhiit10.png","PA LOg\\oct\\IMG20201010122336.jpg","PA LOg\\oct\\IMG20201010122355.jpg","PA LOg\\oct\\IMG20201010122625.jpg","PA LOg\\oct\\IMG20201010122710.jpg","PA LOg\\oct\\IMG20201010122836.jpg","PA LOg\\oct\\IMG20201010123012.jpg","PA LOg\\oct\\IMG20201010123036.jpg","PA LOg\\oct\\IMG20201010123159.jpg","PA LOg\\oct\\IMG20201010123215.jpg","PA LOg\\oct\\oct19_am.jpg","PA LOg\\oct\\oct19_pm.jpg","PA LOg\\oct\\oct20_am.jpg","PA LOg\\oct\\oct21_am.jpg","PA LOg\\oct\\oct21_pm.jpg","PA LOg\\oct\\oct22_am.jpg","PA LOg\\oct\\oct22_pm.jpg", "PA LOg\\oct\\vlcsnap-2021-02-06-11h41m07s854.png" , "PA LOg\\oct\\vlcsnap-2021-02-06-11h41m15s203.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h41m26s986.png", "PA LOg\\oct\\oct26_pm.jpg", "PA LOg\\oct\\oct 26_Dance.jpg","PA LOg\\oct\\oct27_am.jpg","PA LOg\\oct\\oct27_pm.jpg","PA LOg\\oct\\vlcsnap-2021-02-06-11h41m51s979.png", "PA LOg\\oct\\vlcsnap-2021-02-06-11h41m56s618.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h42m06s078.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h42m11s676.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h42m32s959.png","PA LOg\\oct\\vlcsnap-2021-02-06-11h42m41s468.png","PA LOg\\oct\\oct28_am.jpg","PA LOg\\oct\\oct28_pm.jpg","PA LOg\\oct\\oct29_am.jpg","PA LOg\\oct\\oct29_pm.jpg","PA LOg\\oct\\oct29_swim.jpg","PA LOg\\oct\\oct30_dance.jpg"];
const novPics = ["PA LOg\\nov\\nov.3.3.png","PA LOg\\nov\\nov.3.7.png","PA LOg\\nov\\nov.3.8.png","PA LOg\\nov\\nov3.1.png","PA LOg\\nov\\nov3.2.png","PA LOg\\nov\\nov3.4.png","PA LOg\\nov\\nov3.5.png", "PA LOg\\nov\\nov3.6.png","PA LOg\\nov\\nov3.8.png","PA LOg\\nov\\nov3.9.png","PA LOg\\nov\\nov3.10.png", "PA LOg\\nov\\nov3.11.png","PA LOg\\nov\\Nov3_am.jpg","PA LOg\\nov\\Nov4_am.jpg","PA LOg\\nov\\nov4_pm.jpg","PA LOg\\nov\\nov5_am.jpg","PA LOg\\nov\\nov5_pm.jpg","PA LOg\\nov\\Nov9_am.jpg","PA LOg\\nov\\nov10_am.jpg","PA LOg\\nov\\nov10_pm.jpg","PA LOg\\nov\\Nov11_am.jpg","PA LOg\\nov\\Nov11_pm.jpg","PA LOg\\nov\\Nov12_am.jpg","PA LOg\\nov\\Nov17_pm.jpg","PA LOg\\nov\\Nov17.jpg","PA LOg\\nov\\Nov18.jpg","PA LOg\\nov\\Nov23am.jpg","PA LOg\\nov\\nov23pm.jpg","PA LOg\\nov\\nov24am.jpg","PA LOg\\nov\\nov24pm.jpg","PA LOg\\nov\\Nov25am.jpg","PA LOg\\nov\\Nov25pm.jpg","PA LOg\\nov\\Nov26pm.jpg","PA LOg\\nov\\Nov28HiitExercise1.jpg","PA LOg\\nov\\Nov28HiitExercise2.jpg","PA LOg\\nov\\Nov28HiitExercise3.jpg","PA LOg\\nov\\Nov28HiitExercise4.jpg"];
const janPics = ["PA LOg\\jan\\jan4am.jpg","PA LOg\\jan\\jan5 am.jpg","PA LOg\\jan\\jan5pm.jpg","PA LOg\\jan\\jan6am.jpg","PA LOg\\jan\\jan6pm.jpg", "PA LOg\\jan\\jan7am.jpg","PA LOg\\jan\\jan8Hiit1.jpg","PA LOg\\jan\\jan8hiit2.jpg","PA LOg\\jan\\jan8hiit3.jpg","PA LOg\\jan\\jan12am.jpg", "PA LOg\\jan\\jan12pm.jpg","PA LOg\\jan\\jan14am.jpg","PA LOg\\jan\\jan14pm.jpg","PA LOg\\jan\\jan15am.jpg","PA LOg\\jan\\jan16swimming.jpg", "PA LOg\\jan\\jan16swimming2.jpg","PA LOg\\jan\\jan18am.jpg","PA LOg\\jan\\jan18pm.jpg","PA LOg\\jan\\jan19am.jpg","PA LOg\\jan\\jan19om.jpg","PA LOg\\jan\\jan20am.jpg","PA LOg\\jan\\jan20Hiit1.jpg", "PA LOg\\jan\\jan20hiit2.jpg","PA LOg\\jan\\jan20hiit3.jpg","PA LOg\\jan\\jan20pm.jpg","PA LOg\\jan\\jan21am.jpg", "PA LOg\\jan\\jan21pm.jpg","PA LOg\\jan\\jan22am.jpg","PA LOg\\jan\\jan25am.jpg","PA LOg\\jan\\jan25pm.jpg","PA LOg\\jan\\jan26am.jpg","PA LOg\\jan\\jan26pm.jpg", "PA LOg\\jan\\jan27am.jpg","PA LOg\\jan\\jan28 am.jpg","PA LOg\\jan\\jan28pm.jpg","PA LOg\\jan\\jan29Hiit1.jpg","PA LOg\\jan\\jan29Hiit2.jpg", "PA LOg\\jan\\jan29Hiit3.jpg", "PA LOg\\jan\\jan29hiit4.jpg", "PA LOg\\jan\\jan29hiit5.jpg"];
const febPics = ["PA LOg\\feb\\Feb1am.jpg","PA LOg\\feb\\feb1pm.jpg","PA LOg\\feb\\feb2am.jpg","PA LOg\\feb\\feb3am.jpg","PA LOg\\feb\\feb3pm.jpg","PA LOg\\feb\\feb4am.jpg","PA LOg\\feb\\feb4pm.jpg", "PA LOg\\feb\\febam.jpg"];

const octDates = ["October 11, 2020", "October 11, 2020", "October 11, 2020", "October 11, 2020", "October 11, 2020", "October 11, 2020", "October 11, 2020" ,"October 11, 2020", "October 11, 2020", "October 11, 2020", "October 13, 2020", "October 14, 2020", "October 14, 2020", "October 15, 2020", "October 15, 2020", "October 17, 2020", "October 17, 2020", "October 17, 2020","October 17, 2020","October 17, 2020","October 17, 2020","October 17, 2020","October 17, 2020","October 17, 2020","October 17, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 18, 2020", "October 19, 2020", "October 19, 2020", "October 20, 2020", "October 21, 2020",  "October 21, 2020", "October 22, 2020",  "October 22, 2020", "October 24, 2020",  "October 24, 2020", "October 24, 2020",  "October 26, 2020", "October 26, 2020", "October 27, 2020", "October 27, 2020", "October 27, 2020", "October 27, 2020", "October 27, 2020", "October 27, 2020", "October 27, 2020",  "October 27, 2020", "October 28, 2020", "October 28, 2020", "October 29, 2020", "October 29, 2020", "October 29, 2020", "October 30, 2020"];
const novDates = ["November 3, 2020", "November 3, 2020", "November 3, 2020","November 3, 2020", "November 3, 2020", "November 3, 2020", "November 3, 2020","November 3, 2020", "November 3, 2020", "November 3, 2020","November 3, 2020", "November 3, 2020", "November 3, 2020", "Novemver 4, 2020", "November 4, 2020", "Novemver 5, 2020", "November 5, 2020", "Novemver 9, 2020", "November 10, 2020", "November 10, 2020", "November 11, 2020", "November 11, 2020", "November 12, 2020", "November 17, 2020", "November 17, 2020", "November 18, 2020","November 23, 2020", "November 23, 2020", "November 24, 2020", "November 24, 2020", "November 25, 2020", "November 25, 2020", "November 26, 2020", "November 28, 2020", "November 28, 2020", "November 28, 2020", "November 28, 2020"];
const decDates = ["December 1, 2020","December 1, 2020","December 2, 2020","December 2, 2020","December 3, 2020","December 3, 2020","December 7, 2020","December 7, 2020","December 9, 2020","December 9, 2020","December 10, 2020","December 10, 2020","December 11, 2020","December 11, 2020","December 14, 2020","December 14, 2020","December 15, 2020","December 15, 2020","December 16, 2020","December 16, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 19, 2020","December 22, 2020" ,"December 23, 2020","December 23, 2020","December 23, 2020","December 23, 2020","December 26, 2020","December 26, 2020","December 26, 2020","December 26, 2020","December 27, 2020","December 27, 2020","December 27, 2020","December 27, 2020", "December 28, 2020","December 29, 2020", "December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020","December 30, 2020"];
const janDates = ["January 4, 2021","January 5, 2021","January 5, 2021","January 6, 2021","January 6, 2021","January 7, 2021","January 8, 2021","January 8, 2021","January 8, 2021","January 12, 2021","January 12, 2021","January 14, 2021","January 14, 2021","January 15, 2021","January 16, 2021","January 16, 2021","January 18, 2021","January 18, 2021","January 19, 2021","January 19, 2021","January 20, 2021","January 20, 2021","January 20, 2021","January 20, 2021","January 20, 2021","January 21, 2021","January 21, 2021","January 22, 2021","January 25, 2021","January 25, 2021","January 26, 2021","January 26, 2021","January 27, 2021", "January 28, 2021","January 28, 2021","January 29, 2021", "January 29, 2021" , "January 29, 2021", "January 29, 2021", "January 29, 2021", "January 29, 2021"];
const febDates = ["February 1, 2021","February 1, 2021","February 2, 2021","February 3, 2021","February 3, 2021","February 4, 2021","February 4, 2021","February 5, 2021"];

const octAct = ["Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Walking","Walking","Walking","Walking","Walking","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Walking", "Dancing","Walking","Walking","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Walking", "Walking","Walking","Walking", "Swimming", "Dancing"];
const novAct = ["Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Muscle Strength Workout","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking", "HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout"];
const decAct = ["Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout", "Zumba", "Jogging", "Jogging", ,"HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout", "Swimming", "Swimming" ,"HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout"];
const janAct = ["Walking","Walking","Walking","Walking","Walking","Walking","HIIT Workout","HIIT Workout","HIIT Workout","Walking","Walking","Walking","Walking","Walking","Swimming", "Swimming", "Walking","Walking","Walking","Walking","Walking","HIIT Workout","HIIT Workout","HIIT Workout","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","Walking","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout","HIIT Workout",];

const octDistance = ["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","1.5 km","N/A","1.5 km","1.5 km","N/A","N/A","N/A","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A"];
const novDistance = ["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","N/A"];
const decDis= ["1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","1 km","1 km","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"];
const janDistance = ["1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","N/A","N/A","N/A","N/A","N/A"];
const febDistance = ["1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km","1.5 km"];


const decDiv = document.querySelector(".decRow");


for (var i = 0; i < octPics.length; i++) {
    octCard();
}
for (var i = 0; i < novPics.length; i++) {
    novCard();
}
for (var i = 0; i < decPics.length; i++) {
    decCard();
}

for (var i = 0; i < janPics.length; i++) {
    janCard();
}
for (var i = 0; i < febPics.length; i++) {
    febCard();
}
function decCard() {
    //card Div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "paLog-size", "shadow", "rounded-4", "border-0", "mx-auto","my-3", "mx-5", "row");
    decDiv.appendChild(cardDiv);
    //image
    const image = document.createElement("img");
    image.setAttribute("src", decPics[i]);
    image.classList.add("rounded-top");
    cardDiv.appendChild(image);
    //card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);
    //card title
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title", "text-primary");
    cardTitle.innerText = decAct[i];
    cardBody.appendChild(cardTitle);
    //card distance
    const distance = document.createElement("p");
    distance.classList.add("card-font-size", "my-0", "text-primary");
    distance.innerText = "Distance: ";
    cardBody.appendChild(distance);
    //card distance title
    const disTitle = document.createElement("span");
    disTitle.classList.add("text-dark");
    disTitle.innerText = decDis[i];
    distance.appendChild(disTitle);
    //card Date
    const date = document.createElement("p");
    date.classList.add("card-font-size", "my-0", "text-primary");
    date.innerText = "Date: ";
    cardBody.appendChild(date);
    //card distance title
    const dateTitle = document.createElement("span");
    dateTitle.classList.add("text-dark");
    dateTitle.innerText = decDates[i];
    date.appendChild(dateTitle);
    
}

function octCard() {
    //card Div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "paLog-size", "shadow", "rounded-4", "border-0", "mx-auto","my-3", "mx-5", "row");
    decDiv.appendChild(cardDiv);
    //image
    const image = document.createElement("img");
    image.setAttribute("src", octPics[i]);
    image.classList.add("rounded-top");
    cardDiv.appendChild(image);
    //card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);
    //card title
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title", "text-primary");
    cardTitle.innerText = octAct[i];
    cardBody.appendChild(cardTitle);
    
    //card distance
    const distance = document.createElement("p");
    distance.classList.add("card-font-size", "my-0", "text-primary");
    distance.innerText = "Distance: ";
    cardBody.appendChild(distance);
    //card distance title
    const disTitle = document.createElement("span");
    disTitle.classList.add("text-dark");
    disTitle.innerText = octDistance[i];
    distance.appendChild(disTitle);
    //card Date
    const date = document.createElement("p");
    date.classList.add("card-font-size", "my-0", "text-primary");
    date.innerText = "Date: ";
    cardBody.appendChild(date);
    //card distance title
    const dateTitle = document.createElement("span");
    dateTitle.classList.add("text-dark");
    dateTitle.innerText = octDates[i];
    date.appendChild(dateTitle);
}
function novCard() {
    //card Div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "paLog-size", "shadow", "rounded-4", "border-0", "mx-auto","my-3", "mx-5", "row");
    decDiv.appendChild(cardDiv);
    //image
    const image = document.createElement("img");
    image.setAttribute("src", novPics[i]);
    image.classList.add("rounded-top");
    cardDiv.appendChild(image);
    //card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);
    //card title
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title", "text-primary");
    cardTitle.innerText = novAct[i];
    cardBody.appendChild(cardTitle);
    
    //card distance
    const distance = document.createElement("p");
    distance.classList.add("card-font-size", "my-0", "text-primary");
    distance.innerText = "Distance: ";
    cardBody.appendChild(distance);
    //card distance title
    const disTitle = document.createElement("span");
    disTitle.classList.add("text-dark");
    disTitle.innerText = novDistance[i];
    distance.appendChild(disTitle);
    //card Date
    const date = document.createElement("p");
    date.classList.add("card-font-size", "my-0", "text-primary");
    date.innerText = "Date: ";
    cardBody.appendChild(date);
    //card distance title
    const dateTitle = document.createElement("span");
    dateTitle.classList.add("text-dark");
    dateTitle.innerText = novDates[i];
    date.appendChild(dateTitle);
}

function janCard () {
    //card Div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "paLog-size", "shadow", "rounded-4", "border-0", "mx-auto","my-3", "mx-5", "row");
    decDiv.appendChild(cardDiv);
    //image
    const image = document.createElement("img");
    image.setAttribute("src", janPics[i]);
    image.classList.add("rounded-top");
    cardDiv.appendChild(image);
    //card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);
    //card title
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title", "text-primary");
    cardTitle.innerText = janAct[i];
    cardBody.appendChild(cardTitle);
    
    //card distance
    const distance = document.createElement("p");
    distance.classList.add("card-font-size", "my-0", "text-primary");
    distance.innerText = "Distance: ";
    cardBody.appendChild(distance);
    //card distance title
    const disTitle = document.createElement("span");
    disTitle.classList.add("text-dark");
    disTitle.innerText = janDistance[i];
    distance.appendChild(disTitle);
    //card Date
    const date = document.createElement("p");
    date.classList.add("card-font-size", "my-0", "text-primary");
    date.innerText = "Date: ";
    cardBody.appendChild(date);
    //card distance title
    const dateTitle = document.createElement("span");
    dateTitle.classList.add("text-dark");
    dateTitle.innerText = janDates[i];
    date.appendChild(dateTitle);
}

function febCard () {
    //card Div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "paLog-size", "shadow", "rounded-4", "border-0", "mx-auto","my-3", "mx-5", "row");
    decDiv.appendChild(cardDiv);
    //image
    const image = document.createElement("img");
    image.setAttribute("src", febPics[i]);
    image.classList.add("rounded-top");
    cardDiv.appendChild(image);
    //card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);
    //card title
    const cardTitle = document.createElement("h6");
    cardTitle.classList.add("card-title", "text-primary");
    cardTitle.innerText = decActivity[0];
    cardBody.appendChild(cardTitle);
    //card distance
    const distance = document.createElement("p");
    distance.classList.add("card-font-size", "my-0", "text-primary");
    distance.innerText = "Distance: ";
    cardBody.appendChild(distance);
    //card distance title
    const disTitle = document.createElement("span");
    disTitle.classList.add("text-dark");
    disTitle.innerText = febDistance[i];
    distance.appendChild(disTitle);
    //card Date
    const date = document.createElement("p");
    date.classList.add("card-font-size", "my-0", "text-primary");
    date.innerText = "Date: ";
    cardBody.appendChild(date);
    //card distance title
    const dateTitle = document.createElement("span");
    dateTitle.classList.add("text-dark");
    dateTitle.innerText = febDates[i];
    date.appendChild(dateTitle);
}