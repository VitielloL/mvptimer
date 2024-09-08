document.addEventListener('DOMContentLoaded', function() {
    function startMVPTimer(timerId, timeInputId, progressBarId, timeRemainingId, duration) {
        const button = document.getElementById(timerId);
        button.addEventListener('click', function() {
            const killTime = document.getElementById(timeInputId).value;
            
            if (!killTime) {
                alert('Por favor, insira a hora que você matou o MVP.');
                return;
            }

            // Convertendo o horário de morte para um timestamp
            const killDate = new Date();
            const [hours, minutes] = killTime.split(':').map(Number);
            killDate.setHours(hours, minutes, 0, 0); // Definindo horas e minutos do horário de morte

            const now = new Date(); // Horário atual

            // Verificar se o horário de morte é futuro (se o jogador matou no dia seguinte, por exemplo)
            if (now < killDate) {
                killDate.setDate(killDate.getDate() - 1); // Ajustar para o dia anterior, se necessário
            }

            // Diferença de tempo em segundos entre o horário de morte e o horário atual
            const elapsedSeconds = Math.floor((now - killDate) / 1000);

            // Verificar se o tempo decorrido já passou do intervalo
            if (elapsedSeconds >= duration) {
                alert('O MVP já nasceu!');
                return;
            }

            const remainingTime = duration - elapsedSeconds; // Tempo restante

            let elapsedTime = elapsedSeconds; // Tempo já passado
            const progressBar = document.getElementById(progressBarId);
            const timeRemainingText = document.getElementById(timeRemainingId);

            // Atualizando o tempo restante desde o início
            updateTimer(remainingTime);

            // Iniciando o temporizador
            const timer = setInterval(() => {
                elapsedTime++; // Incrementa o tempo passado
                const remainingTime = duration - elapsedTime;

                // Atualiza a exibição do tempo restante e a barra de progresso
                updateTimer(remainingTime);

                // Atualizando a barra de progresso
                const progressPercentage = (elapsedTime / duration) * 100;
                progressBar.style.width = `${progressPercentage}%`;

                // Mudança de cor da barra após o tempo mínimo
                if (elapsedTime >= (duration * 0.75)) {
                    progressBar.classList.add('green');
                }

                // Parar quando atingir o intervalo total
                if (elapsedTime >= duration) {
                    clearInterval(timer);
                }
            }, 1000);

            // Função para atualizar a exibição do tempo
            function updateTimer(remainingTime) {
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                // Atualizando o display de tempo
                timeRemainingText.textContent = `Tempo restante: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        });
    }

    // Inicializando os temporizadores para cada MVP
    startMVPTimer('start-timer', 'kill-time', 'progress-bar', 'time-remaining', 12000); // Amalgamação de Maldade
    startMVPTimer('start-timer-loli1', 'kill-time-loli1', 'progress-bar-loli1', 'time-remaining-loli1', 3000); // Loli Luni 1
    startMVPTimer('start-timer-loli2', 'kill-time-loli2', 'progress-bar-loli2', 'time-remaining-loli2', 3000); // Loli Luni 2
    startMVPTimer('start-timer-loli3', 'kill-time-loli3', 'progress-bar-loli3', 'time-remaining-loli3', 3000); // Loli Luni 3
    startMVPTimer('start-timer-desmorto1', 'kill-time-desmorto1', 'progress-bar-desmorto1', 'time-remaining-desmorto1', 3000); // Desmorto 1
    startMVPTimer('start-timer-desmorto2', 'kill-time-desmorto2', 'progress-bar-desmorto2', 'time-remaining-desmorto2', 3000); // Desmorto 2
    startMVPTimer('start-timer-desmorto3', 'kill-time-desmorto3', 'progress-bar-desmorto3', 'time-remaining-desmorto3', 3000); // Desmorto 3
});
