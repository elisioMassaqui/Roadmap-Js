const { exec } = require('child_process');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o comando "${command}":\n`, stderr);
        reject(error);
        return;
      }
      console.log(`Resultado do comando "${command}":\n`, stdout);
      resolve();
    });
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runCommandsWithDelay() {
  try {
    console.log('Arduino CLI Versão...');
    await runCommand('arduino-cli version');
    console.log('Versão.');
    await delay(3000); // 3 segundos de atraso

    console.log('Atualizando índice de núcleos...');
    await runCommand('arduino-cli core update-index');
    console.log('Índice de núcleos atualizado.');
    await delay(3000); // 3 segundos de atraso

    console.log('Instalando núcleo AVR...');
    await runCommand('arduino-cli core install arduino:avr');
    console.log('Núcleo AVR instalado.');
    await delay(3000); // 3 segundos de atraso

    console.log('Instalando a biblioteca Servo...');
    await runCommand('arduino-cli lib install "Servo"');
    console.log('Biblioteca Servo instalada.');
  } catch (error) {
    console.error('Erro ao executar comandos:', error);
  }
}

runCommandsWithDelay();
