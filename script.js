document.addEventListener('DOMContentLoaded', function() {
    function startMVPTimer(timerId, timeInputId, progressBarId, timeRemainingId, minDuration, maxDuration) {
        const button = document.getElementById(timerId);
        const resetButton = document.getElementById(timerId + '-reset');
        
        button.addEventListener('click', function() {
            const killTime = document.getElementById(timeInputId).value;

            if (!killTime) {
                alert('Por favor, insira a hora que você matou o MVP.');
                return;
            }

            const killDate = new Date();
            const [hours, minutes] = killTime.split(':').map(Number);
            killDate.setHours(hours, minutes, 0, 0);

            const now = new Date();
            if (now < killDate) {
                killDate.setDate(killDate.getDate() - 1);
            }

            const elapsedSeconds = Math.floor((now - killDate) / 1000);

            if (elapsedSeconds >= maxDuration) {
                alert('O MVP já nasceu!');
                return;
            }

            const remainingTime = maxDuration - elapsedSeconds;
            let elapsedTime = elapsedSeconds;

            const progressBar = document.getElementById(progressBarId);
            const timeRemainingText = document.getElementById(timeRemainingId);

            updateTimer(remainingTime);

            const timer = setInterval(() => {
                elapsedTime++;
                const remainingTime = maxDuration - elapsedTime;

                updateTimer(remainingTime);

                const progressPercentage = (elapsedTime / maxDuration) * 100;
                progressBar.style.width = `${progressPercentage}%`;

                // Muda a cor da barra nos últimos 20 minutos
                if (remainingTime <= 1200) { // 1200 segundos = 20 minutos
                    progressBar.classList.add('green');
                } else {
                    progressBar.classList.remove('green');
                }

                if (elapsedTime >= maxDuration) {
                    clearInterval(timer);
                }
            }, 1000);

            // Função para atualizar o display do tempo restante
            function updateTimer(remainingTime) {
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                timeRemainingText.textContent = `Tempo restante: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            // Função para resetar o temporizador
            resetButton.addEventListener('click', function() {
                clearInterval(timer); // Para o temporizador atual
                progressBar.style.width = '0%'; // Reseta a largura da barra de progresso
                progressBar.classList.remove('green'); // Remove a classe verde
                timeRemainingText.textContent = 'Tempo restante: 00:00:00'; // Reseta o texto
                document.getElementById(timeInputId).value = ''; // Limpa o campo de entrada de tempo
            });
        });
    }

    // Adiciona a função startMVPTimer para cada MVP
    startMVPTimer('start-timer', 'kill-time', 'progress-bar', 'time-remaining', 1800, 12000); // Amalgamação de Maldade
    startMVPTimer('start-timer-loli1', 'kill-time-loli1', 'progress-bar-loli1', 'time-remaining-loli1', 1800, 3000); // Loli Luni 1
    startMVPTimer('start-timer-loli2', 'kill-time-loli2', 'progress-bar-loli2', 'time-remaining-loli2', 1800, 3000); // Loli Luni 2
    startMVPTimer('start-timer-loli3', 'kill-time-loli3', 'progress-bar-loli3', 'time-remaining-loli3', 1800, 3000); // Loli Luni 3
    startMVPTimer('start-timer-desmorto1', 'kill-time-desmorto1', 'progress-bar-desmorto1', 'time-remaining-desmorto1', 1800, 3000); // Desmorto 1
    startMVPTimer('start-timer-desmorto2', 'kill-time-desmorto2', 'progress-bar-desmorto2', 'time-remaining-desmorto2', 1800, 3000); // Desmorto 2
    startMVPTimer('start-timer-desmorto3', 'kill-time-desmorto3', 'progress-bar-desmorto3', 'time-remaining-desmorto3', 1800, 3000); // Desmorto 3
});
