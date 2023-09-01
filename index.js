const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();


    const tapContainer = document.getElementById('tap-container');

    data.data.forEach(category => {
        const span = document.createElement('span');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class=" btn bg-[#252525B2] text-white text-lg font-bold px-[20px] py-[5px] rounded mr-4">${category.category}</a>
        `;
        tapContainer.appendChild(span);
    });
};




const handleLoadNews = async (categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();


    const cardContainer = document.getElementById('card-container');

    data.data.forEach(news => {
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <figure><img src= alt="" /></figure>
                    <div class="card-body flex">
                        <img class="w-[40px] rounded-full" src="https://i.ibb.co/D9wWRM6/olivia.jpg" alt="" srcset="">
                        <h2 class="card-title">
                            Building a Winning UX Strategy Using the Kano Model
                        </h2>
                        <div class="flex gap-3">
                            <h1>Awlad Hossain</h1>
                            <img src="checklist_10629607 (1).png" alt="">
                        </div>
                        <p>91K views</p>

                    </div>
                </div>
        `;
        cardContainer.appendChild(div);

    });

}

handleCategory()