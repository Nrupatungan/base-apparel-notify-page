const input_section = document.querySelector('.input-section');
const input = document.querySelector('input');
const sumbit_btn = document.querySelector('button');


sumbit_btn.onclick = () => {
    let str = input.value;
    if(str.match(/[a-zA-Z0-9]{1,40}\@[a-z]{1,8}mail\.com$/)){
        show_alert("success");
    }else{
        show_alert("danger");
    }
}

input.onfocus = () => {
    input.className = "w-full text-sm border-2 outline-none border-Desaturated_Red rounded-full py-3 ps-4 pe-16";

    sumbit_btn.className = "width-full bg-gradient-to-r from-grd_2_from to-grd_2_to px-6 h-[47.07px] rounded-full absolute -right-0 hover:bg-gradient-to-r hover:from-grd_2_from hover:to-grd_2_from active:scale-110 md:px-8 shadow-2xl";
    
    sumbit_btn.disabled = false;
    document.querySelector('#alert').remove();
}

function show_alert(type){
    const div = document.createElement('div');
    div.id = "alert";

    if(type === "success"){
        input.className = "w-full text-sm border-2 outline-none border-green-500 rounded-full py-3 ps-4 pe-16";

        sumbit_btn.className = "width-full bg-gradient-to-r from-grd_2_from to-grd_2_to px-6 h-[47.07px] rounded-full absolute -right-0 active:scale-110 md:px-8 shadow-2xl";

        div.appendChild(document.createTextNode("Email submitted successfully."));
        div.className =  "text-left text-sm ps-4 pt-[0.3rem] text-green-500";

    }else{
        input.className = "w-full text-sm border-2 outline-none border-Soft_Red rounded-full py-3 ps-4 pe-28 bg-[url('/assets/images/icon-error.svg')] bg-no-repeat bg-[center_right_4rem] md:bg-[center_right_5rem]";

        sumbit_btn.className = "width-full px-6 h-[47.07px] rounded-full absolute -right-0 bg-gradient-to-r from-grd_2_from to-grd_2_from active:scale-110 md:px-8 shadow-2xl";

        div.appendChild(document.createTextNode("Please provide a valid email."));
        div.className =  "text-left text-sm ps-4 pt-[0.3rem] text-Soft_Red";

    }

    input_section.after(div);

    sumbit_btn.disabled = true;
}