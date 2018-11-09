   window.onload = function() {
            var modalYes = new RModal(document.getElementById('modalYes'), {
                beforeOpen: function(next) {
                    next();
                }
                , afterOpen: function() {
                }
                , beforeClose: function(next) {
                    next();
                }
                , afterClose: function() {
                }
            });
            document.addEventListener('keydown', function(ev) {
                modalYes.keydown(ev);
            }, false);
            window.modalYes = modalYes;
            var modalNo = new RModal(document.getElementById('modalNo'), {
                beforeOpen: function(next) {
                    next();
                }
                , afterOpen: function() {
                }
                , beforeClose: function(next) {
                    next();
                }
                , afterClose: function() {
                }
            });
            document.addEventListener('keydown', function(ev) {
                modalNo.keydown(ev);
            }, false);
            window.modalNo = modalNo;
        }

	function fancyAICall(argument) {
		var name = document.getElementById('name').value;
		var surname = document.getElementById('surname').value;
		var email = document.getElementById('email').value;
		var income = document.getElementById("income").value;
		var age = document.getElementById("name").value;
		var gender = document.getElementById('gender').value.toLowerCase();
		var ethnicity = document.getElementById('ethnicity').value.toLowerCase();
		if (! name || !surname || !email || !income || ! age || !gender || !ethnicity ) {
			modalNo.open()
		} else if (age < 30 || age > 45 || (gender == 'male' && (ethnicity == 'white' || ethnicity == 'caucasian')) || income < 100000) {
			modalNo.open();
		}
		else {
			modalYes.open();
		}
		return false;
	}		