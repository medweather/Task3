
window.onload = function()
    {
        (function()
        {
            // создаем массив нумерации цветов

            let colors = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

            // создаем переменные

            let i, j, x;

            // перемешиваем цвета

            for (i = colors.length; i;)
            {
                j = Math.floor(Math.random() * i);
                x = colors[--i];
                colors[i] = colors[j];
                colors[j] = x;
            }

            // рисуем

            for (j = 0; j < 16; j++)

                document.getElementById('place').innerHTML += '<a color="' + colors[j] + '" class="color' +
                                                               + colors[j] + ' hidden" color=""></a>';

            // создаем событие клика

            let check = false;

            let setcolor = 0;

            let sela, timer;

            let steps = 0;

            let open = 0;

            let a = document.getElementsByTagName('a');

            let button = document.getElementById('start')

            document.getElementById('popUp').style.display = "none";

            button.addEventListener('click', function()
            {
                button.disabled = true;

                for (let i = 0; i < a.length; i++)
                {
                    a[i].addEventListener('click', function(e)
                    {
                        steps++;

                        let el = e.target;

                        el.className = el.className.replace('hidden', '');

                        setTimeout(function()
                        {
                            if(check)
                            {
                                check = false;

                                // если цвета совпали

                                if(el.getAttribute('color') == setcolor)
                                {
                                    open++;

                                    // если количество совпадений = максимально возможному

                                    if(open == 8)
                                    {
                                        document.getElementById('popUp').style.display = "block";

                                        document.getElementById('res').innerHTML = document.myForm.stopwatch.value;
                                    }
                                }
                                else
                                {
                                    // если цвета не совпали, то прячем блок

                                    sela.className += ' hidden';

                                    el.className += ' hidden';
                                }
                            }
                            else
                            {
                                // если кликнули на первую картинку в паре

                                setcolor = el.getAttribute('color');

                                sela = el;

                                check = true;
                            }
                        }, 100);
                    });
                }
            })

        })();
    }