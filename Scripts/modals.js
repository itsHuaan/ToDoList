document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.action-dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('change', function () {
            var selectedValue = this.value;
            var dropdownElement = this;

            if (selectedValue) {
                if (selectedValue.includes('Delete')) {
                    fetch(selectedValue)
                        .then(response => response.text())
                        .then(html => {
                            document.querySelector('#deleteModal .modal-body').innerHTML = html;
                            $('#deleteModal').modal('show');
                        })
                        .catch(error => console.error('Error loading delete view:', error));

                    document.querySelector('#confirmDelete').onclick = function () {
                        var form = document.querySelector('#deleteModal form');
                        if (form) {
                            form.submit();
                        }
                    };
                    
                    $('#deleteModal').on('hidden.bs.modal', function () {
                        dropdownElement.value = "";
                    });

                } else if (selectedValue.includes('Edit')) {
                    fetch(selectedValue)
                        .then(response => response.text())
                        .then(html => {
                            document.querySelector('#editModal .modal-body').innerHTML = html;
                            $('#editModal').modal('show');
                        })
                        .catch(error => console.error('Error loading edit view:', error));
                        
                    document.querySelector('#confirmEdit').onclick = function () {
                        var form = document.querySelector('#editModal form');
                        if (form) {
                            form.submit();
                        }
                    };
                    
                    $('#editModal').on('hidden.bs.modal', function () {
                        dropdownElement.value = "";
                    });

                } else {
                    window.location.href = selectedValue;
                }
            }
        });
    });
});
