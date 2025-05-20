document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de formulário carregada com sucesso!');
    
    const form = document.getElementById('registration-form');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');
    const passwordStrengthBar = document.getElementById('password-strength-bar');
    const passwordFeedback = document.getElementById('password-feedback');
    
    // Evento input - validação de senha em tempo real
    senhaInput.addEventListener('input', function() {
        const senha = this.value;
        const strength = calculatePasswordStrength(senha);
        updatePasswordStrengthIndicator(strength);
    });
    
    // Evento change - validação quando perde o foco
    senhaInput.addEventListener('change', function() {
        if (this.value.length < 8) {
            alert('A senha deve ter pelo menos 8 caracteres');
        }
    });
    
    // Evento submit - envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Verificar se as senhas coincidem
        if (senhaInput.value !== confirmarSenhaInput.value) {
            alert('As senhas não coincidem!');
            return;
        }
        
        // Verificar força da senha
        const strength = calculatePasswordStrength(senhaInput.value);
        if (strength.score < 3) {
            alert('Por favor, use uma senha mais forte!');
            return;
        }
        
        // Simular envio
        alert('Inscrição realizada com sucesso! Bem-vindo ao futuro da Inteligência Artificial!');
        form.reset();
        passwordStrengthBar.style.width = '0%';
        passwordFeedback.textContent = '';
    });
    
    // Evento focus
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('label').style.color = '#097a6c';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.querySelector('label').style.color = '#555';
        });
    });
    
    // Evento keyup
    document.addEventListener('keyup', function(e) {
        console.log(`Tecla ${e.key} solta`);
    });
    
    // Evento resize
    window.addEventListener('resize', function() {
        console.log(`Janela redimensionada: ${window.innerWidth}x${window.innerHeight}`);
    });
    
    // Função para calcular força da senha
    function calculatePasswordStrength(password) {
        let score = 0;
        let messages = [];
        let missing = [];
        
        // Verificar comprimento
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (password.length < 8) {
            missing.push('pelo menos 8 caracteres');
        } else if (password.length < 12) {
            missing.push('pelo menos 12 caracteres para maior segurança');
        }
        
        // Verificar letras maiúsculas
        if (/[A-Z]/.test(password)) {
            score++;
        } else {
            messages.push('letra maiúscula');
            missing.push('uma letra maiúscula (A-Z)');
        }
        
        // Verificar letras minúsculas
        if (/[a-z]/.test(password)) {
            score++;
        } else {
            messages.push('letra minúscula');
            missing.push('uma letra minúscula (a-z)');
        }
        
        // Verificar números
        if (/[0-9]/.test(password)) {
            score++;
        } else {
            messages.push('número');
            missing.push('um número (0-9)');
        }
        
        // Verificar caracteres especiais
        if (/[^A-Za-z0-9]/.test(password)) {
            score++;
        } else {
            messages.push('caractere especial');
            missing.push('um caractere especial (!@#$% etc.)');
        }
        
        return {
            score: Math.min(score, 5),
            messages: messages,
            missing: missing
        };
    }
    
    // Função para atualizar indicador de força da senha
    function updatePasswordStrengthIndicator(strength) {
        const width = (strength.score / 5) * 100;
        let color;
        
        if (strength.score <= 1) color = '#ff4d4d';
        else if (strength.score <= 3) color = '#ffcc00';
        else color = '#4CAF50';
        
        passwordStrengthBar.style.width = `${width}%`;
        passwordStrengthBar.style.backgroundColor = color;
        
        // Atualizar mensagem
        if (senhaInput.value.length === 0) {
            passwordFeedback.textContent = '';
        } else if (strength.missing.length > 0) {
            passwordFeedback.innerHTML = `<strong>Senha fraca/moderada.</strong> Adicione ${strength.missing.join(', ')}.`;
        } else {
            passwordFeedback.textContent = 'Senha forte!';
        }
    }
});

// Função para alternar visibilidade da senha
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const icon = document.querySelector(`[onclick="togglePassword('${fieldId}')"]`);
    
    if (field.type === 'password') {
        field.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}