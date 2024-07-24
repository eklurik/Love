document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    let isViewingImage = false;

    const commands = {
        help: 'help               list all commands (you\'re looking at it)\n' +
              'time               показати скільки часу разом\n' +
              'mylove             подивитись на чоловіка\n' +
              'my                 твої фоточки миленьки\n' +
              'tors               пресика трохи\n' +
              'popa               фотка моєї жопи\n' +
              'mi                 мі',
        time: showTimeSpent,
        my: showMyImage,
        mylove: showMyLoveImage,
        popa: 'куда тобі та попа, зараз віруси скачаю',
        tors: showRandomImage,
        mi: showMiImages,
        back: 'Можеш вибрати інший пункт',
    };

    function showTimeSpent() {
        const startDate = new Date("2023-15-08");
        const nowDate = new Date();
        const diffTime = Math.floor((nowDate - startDate) / 1000);

        const days = Math.floor(diffTime / 86400);
        const hours = Math.floor((diffTime % 86400) / 3600);
        const minutes = Math.floor((diffTime % 3600) / 60);

        return `Ми разом ${days} днів, ${hours} годин, ${minutes} хвилин.
        Кохаю тебе!`;
    }

    function showRandomImage() {
        const images = ['pres1.jpeg', 'biz.jpeg'];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        isViewingImage = true;
        return `<img src="${randomImage}" alt="Random Image" style="max-width: 100%; height: auto;"><br>Напиши <span class="command">back</span>, щоб повернутись назад.`;
    }
    
    function showMyLoveImage() {
        const images = ['photo4_1.jpeg', 'photo4_2.jpeg','photo4_3.jpeg','photo4_4.jpeg','photo4_5.jpeg','photo4_6.jpeg','photo4_7.jpeg','photo4_8.jpeg','photo4_9.jpeg','photo4_10.jpeg','photo4_11.jpeg','photo4_12.jpeg','photo4_13.jpeg','photo4_14.jpeg','photo4_15.jpeg',];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        isViewingImage = true;
        return `<img src="${randomImage}" alt="Random Image" style="max-width: 100%; height: auto;"><br>Напиши <span class="command">back</span>, щоб повернутись назад.`;
    }

    function showMyImage() {
        const images = ['photo2_1.jpeg', 'photo2_2.jpeg','photo2_3.jpeg','photo2_4.jpeg','photo2_5.jpeg', 'photo2_6.jpeg','photo2_7.jpeg', 'photo2_8.jpeg','photo2_9.jpeg','photo2_10.jpeg','photo2_11.jpeg','photo2_12.jpeg','photo2_13.jpeg','photo2_14.jpeg','photo2_15.jpeg','photo2_16.jpeg',];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        isViewingImage = true;
        return `<img src="${randomImage}" alt="Random Image" style="max-width: 100%; height: auto;"><br>Напиши <span class="command">back</span>, щоб повернутись назад.`;
    }

    function showMiImages() {
        const images = ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg', 'photo5.jpeg', 'photo6.jpeg', 'photo7.jpeg', 'photo8.jpeg','photo9.jpeg','photo10.jpeg'];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        isViewingImage = true;
        return `<img src="${randomImage}" alt="Random Image" style="max-width: 100%; height: auto;"><br>Напиши <span class="command">back</span>, щоб повернутись назад.`;
    }

    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (commands[command]) {
                if (command === 'exit') {
                    window.location.href = 'https://alexekler.com';
                } else if (typeof commands[command] === 'function') {
                    output.innerHTML += `<div class="output-line user-command">${command}</div><div class="output-line console-response">${commands[command]()}</div>`;
                } else {
                    output.innerHTML += `<div class="output-line user-command">${command}</div><div class="output-line console-response">${commands[command]}</div>`;
                }
            } else {
                if (isViewingImage && command === 'back') {
                    isViewingImage = false;
                    output.innerHTML += `<div class="output-line user-command">${command}</div><div class="output-line console-response">${commands[command]}</div>`;
                } else {
                    output.innerHTML += `<div class="output-line user-command">${command}</div><div class="output-line console-response">Command not found. Type 'help' for a list of commands.</div>`;
                }
            }
            input.value = '';
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
});
