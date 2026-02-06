// // acc_no accNo

// // operator in js

// // const name = "chijioke";
// // const name1 = "amaka";

// // if(name1 == name){
// //     console.log("it match")
// // }else{
//     //     console.log("not match")
//     // }

//     const maiden_name = "olamma";
//     const dateof_B = '308201';
//     const issingle = true;
//     let nationality = null;
// let nextof_k = undefined;
// const qualification = "phd";
// const id_number = "nd245378";

// // assignment operator:===,!=,>=,<=,<>,==
// // logical operator &&,||, !

// const num1 = ""
// const num2=1

// // console.log(num1=== num2)
// // console.log(num1== num2)

// // console.log(num1 !== num2)
// // console.log(num1 != num2)
// const basket = false

// const num3= 50
// const num4= 40

// // console.log(num3 >= num4 && "pass"||num3 <= num4 && "fail")
// console.log(typeof dateof_B ==="string" && "denied")
// // console.log(typeof dateof_B ==="number" && "accepted")

// const likes = "123456789".length;
// const friend=["chijioke","emma","aboy"];
// const name2 = "amaka";
// // console.log(name2 + " "+ "going to school")
// const btn = document.querySelector(".display")
// btn.textContent=`${likes<2?`👍`:`👍${likes}`}`
// const lastFriend = friend[0]
// // console.log(lastFriend)
// // console.log(maiden_name[2])
// // console.log(maiden_name[3])
// const login_user = document.querySelector(".user")
// login_user.textContent = login_user.textContent.replaceAll("name",friend[1])

// const foods = ["abacha", "okpa", "achicha", "oha_soup", "afang"];
// const music = ["Gospel", "Afrobeats", "R&B", "Highlife"];
// const movies = ["Romance", "Comedy", "Action", "Documentary"];
// const hobbies = ["singing", "shopping", "dancing", "travelling"];
// const places = ["Church", "gym", "mall", "beach"];

// console.log(foods[2]);

// const best = document.querySelector(".best");
// best.textContent = 
// `Best food:  ${foods[2]}
// Best music:  ${music[0]}
// Best movies:  ${movies[1]}
// Best hobbies:  ${hobbies[0]}
// Best places:  ${places[1]}`


  const profileData = {
    username: "QueenLuchy",
    likes: 1087,
    followers: 3456,
    image: "Mypics.JPG"
  };

  document.getElementById("username").textContent = profileData.username;
  document.getElementById("likes").textContent = profileData.likes.toLocaleString();
  document.getElementById("followers").textContent = profileData.followers.toLocaleString();
  document.getElementById("avatar").src = profileData.image;

