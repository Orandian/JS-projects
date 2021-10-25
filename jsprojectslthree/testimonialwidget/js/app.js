// UI
const testimonial = document.querySelector('.testimonial'),
    userimage = document.querySelector('.user-image'),
    username = document.querySelector('.user-name'),
    role = document.querySelector('.role');

const testimonials = [
    {
        name: "Mya Mya",
        role: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        text: "Mya Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo quasi commodi ullam, doloribus, adipisci quaerat laboriosam autem deleniti quisquam vero. Labore deleniti libero fugiat adipisci impedit blanditiis quia?"
    },
    {
        name: "Aung Aung",
        role: "Accountant",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
        text: "Aung Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo quasi commodi ullam, doloribus, adipisci quaerat laboriosam autem deleniti quisquam vero. Labore deleniti libero fugiat adipisci impedit blanditiis quia?"
    },
    {
        name: "Su Su",
        role: "Manager",
        photo: "https://randomuser.me/api/portraits/women/51.jpg",
        text: "Su Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo quasi commodi ullam, doloribus, adipisci quaerat laboriosam autem deleniti quisquam vero. Labore deleniti libero fugiat adipisci impedit blanditiis quia?"
    },
    {
        name: "Kyaw Kyaw",
        role: "Sales",
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
        text: "Kyaw Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo quasi commodi ullam, doloribus, adipisci quaerat laboriosam autem deleniti quisquam vero. Labore deleniti libero fugiat adipisci impedit blanditiis quia?"
    },
    {
        name: "Hla Hla",
        role: "Warehouse Manager",
        photo: "https://randomuser.me/api/portraits/women/52.jpg",
        text: "Hla Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi nemo quasi commodi ullam, doloribus, adipisci quaerat laboriosam autem deleniti quisquam vero. Labore deleniti libero fugiat adipisci impedit blanditiis quia?"
    }
];

let idx = 0;

function updatetestimonial(){
    const { name,role,photo,text } = testimonials[idx];

    testimonial.textContent = text;
    userimage.src = photo;
    username.textContent = name;
    role.innerText = role;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}
updatetestimonial();
setInterval(updatetestimonial, 10000);