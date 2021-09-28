const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const auth = document.querySelector("#auth");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const GREETING_MSGS = [[0, 4, "Good night"], 
                    [5, 11, "Good morning"],         
                    [12, 17, "Good afternoon"],
                    [18, 24, "Good night"]];

function submitLoginButton(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);

    paintGreeting(username);

}

function paintGreeting(username) {
    children = auth.children;
    console.dir(children);

    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(HIDDEN_CLASS);
    }

    greeting.innerHTML = `${getGreetingMsg()}, ${username}!`;
}

function getGreetingMsg() {
    const date = new Date();
    const hours = date.getHours();

    let msg = 'hello';
    GREETING_MSGS.forEach((item, index)=>{
        console.log(item);
        if(item[0] <= hours && item[1] >= hours) {
            msg = item[2];
            return false;
        }
    });

    return msg;

}
 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", submitLoginButton);

} else {
    paintGreeting(savedUsername);
}

