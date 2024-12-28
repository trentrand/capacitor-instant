import { Instant } from '@trentrand/capacitor-instant';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Instant.echo({ value: inputValue })
}
