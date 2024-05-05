//  Se ajusta el Plan de clase al plan de estudios (Contraste entre el Plan de estudio y la
planificación
function toggleNiveles(enable) {
    var nivelesDiv = document.getElementById('niveles');
    if (enable) {
        nivelesDiv.style.display = 'block';
    } else {
        nivelesDiv.style.display = 'none';
        document.querySelectorAll('#niveles input[type="checkbox"]').forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}
