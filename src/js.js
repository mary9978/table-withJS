function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    let name=document.getElementById("name_row"+no);
    let phone=document.getElementById("phone_row"+no);
    let age=document.getElementById("age_row"+no);

    let name_data=name.innerHTML;
    let phone_data=phone.innerHTML;
    let age_data=age.innerHTML;

    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
    let name_val=document.getElementById("name_text"+no).value;
    let phone_val=document.getElementById("phone_text"+no).value;
    let age_val=document.getElementById("age_text"+no).value;

    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("phone_row"+no).innerHTML=phone_val;
    document.getElementById("age_row"+no).innerHTML=age_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    let new_name=document.getElementById("new_name").value;
    let new_phone=document.getElementById("new_phone").value;
    let new_age=document.getElementById("new_age").value;

    let table=document.getElementById("data_table");
    let table_len=(table.rows.length)-1;
    let row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='phone_row"+table_len+"'>"+new_phone+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_name").value="";
    document.getElementById("new_phone").value="";
    document.getElementById("new_age").value="";
}