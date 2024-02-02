
    function sort() {
        return Math.round(Math.random() * 10);
    }

    function sortNumbers(quant) {
        var secrets = [];
        var number = 1;
        while(number <= quant) {
            var randomNumber = sort();
            if (randomNumber !== 0 ) {
                var found = false;
                for (var pos = 0; pos < secrets.length; pos++) {
                    if(secrets[pos] == randomNumber) {
                        found = true;
                        break;
                    }
                }
                if(found == false) {
                    secrets.push(randomNumber);
                    number++;
                }
            }
        }
        return secrets
    }
    
    var secrets = sortNumbers(5);
    console.log(secrets);

    var input = document.querySelector("input");
    input.focus();


    function verify() {

        var found = false;
        for(var pos = 0; pos < secrets.length; pos++) {
            if(input.value == secrets[pos]) {
                alert('you guessed it!');
                found = true;
                break;
            }
        }      

        if(found == false) {
            alert('you are wrong!');
        }
        input.value = '';
        input.focus();

    }   
    var button = document.querySelector("button");

    button.onclick = verify;
