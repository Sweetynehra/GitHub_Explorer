// //  API USED => https://api.github.com/user/user_name


const userImg = document.querySelector(".profile-picture");

const following = document.querySelector("#following");

const fetchUser = (user_name) => {
	fetch('https://api.github.com/users/Sweetynehra')
		.then((data) => data.json())
		.then(jsonData => { console.log(jsonData);

			if (jsonData.message == "Not found") {
				alert("User Not Found");
				return;
				console.log("Error" + jsonData.message);
			} else {
				userImg.innerHTML = `
            <img src="${jsonData.avatar_url}" alt="avatar" class="profile-picture">
            `;
			document.querySelector("#name").innerHTML = jsonData.name;
			document.querySelector("#bio").innerHTML = jsonData.bio;
			document.querySelector("#repo").innerHTML = jsonData.public_repos;
			document.querySelector('#followers').innerHTML = jsonData.followers;
			document.querySelector('#following').innerHTML = jsonData.following;
			document.querySelector('#created_at').innerHTML = jsonData.created_at;
			}

		})
		
}

const getUser = () => {
	let user_name = document.querySelector("#input");
	//  trim will replace before and after spaces

	if (user_name.length == 0) {
		alert("Please enter a valid github username");
	} else {
		fetchUser(user_name)
	}

	user_name = " ";
}