const collectionsEl = document.querySelector('.collections')
const popularColletionsEl = document.querySelector('.popular')


const imageCollections =[
    {
        "category": "People",
        "images": ["https://cdn.shopify.com/s/files/1/1717/4865/files/tatiana-dietman_-aficionada_-fiest-bracelets_2048x2048.jpg?v=1626298269",
    
        "https://lebonas.com/wp-content/uploads/2019/05/GASHA.jpg",
        
        "https://i0.wp.com/critiqsite.com/wookidoz/2021/05/Rinyu-biography.jpg?fit=1440%2C1800&ssl=1"]
    },

    {
        "category": "Nature",
        "images":[
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",

        "https://wallpaperaccess.com/full/2514219.jpg", "https://wallpapercave.com/wp/wp2829200.jpg",
    
        "https://wallpapercave.com/wp/wp2827632.jpg"
    ]},

    {"category":"History",
    "images":[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4agaN9f5NW1nVQgafGUC8oPieU4h8_vc4Zw&usqp=CAU",

        "https://th-thumbnailer.cdn-si-edu.com/uY9ax8lvcrsJ8grJgpHxKRza93c=/1400x1050/filters:focal(700x527:701x528)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/d0/fe/d0fe7c71-eb2c-4812-9109-d402f5987dcd/fascinating-finds.jpg",
        
        "https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-feather-quill-compass-30890377.jpg"
    ]}
]

const catArray = imageCollections.map(collection => collection['category'])
renderCategories(catArray)

for(const imageCollection of imageCollections){
    let images = imageCollection['images']
    let collection = createCollection(images)
    renderCollection(collection)
}
  


function createCollection(images){
    let collection = document.createElement("div");
    collection.className ="w-full max-w-xs p-4";

    let previewContainer = document.createElement("div");
    previewContainer.className = "overflow-hidden rounded-xl";

    let previewImg = document.createElement('img');
    previewImg.src = images[0];

    previewImg.className = "w-full object-cover object-top aspect-video hover:scale-[1.02] transition-transform duration-500";

    previewContainer.appendChild(previewImg);
    collection.appendChild(previewContainer)

    let avatars = document.createElement("div");
    avatars.className = "py-2 flex flex-row justify-start w-full max-h-fit";

    let avatar = document.createElement("img");
    avatar.src = "";
    avatar.className = "object-cover object-center aspect-square max-h-[0.5in] rounded-xl m-1 hover:scale-105 transition-transform duration-200";
    
    for(const imageLink of images){
        let avtar = avatar.cloneNode(true)
        avtar.src = imageLink;
        avatars.appendChild(avtar);
    }

    collection.appendChild(avatars);
    
    return collection;
}

function renderCategories(categories){
    let cat = document.createElement('div')
    cat.className = "py-2 px-4 rounded-lg shadow-sm text-slate-600 text-xs"

    for( const catName of categories){
        let clonedCat = cat.cloneNode(true)
        clonedCat.innerText = catName
        popularColletionsEl.appendChild(clonedCat)
    }
}

function renderCollection(collection){
    collectionsEl.appendChild(collection);
}

