$(document).ready(function() {
    // Transaction log drawer function JS start

    let row = $("#services-tabContent .table tbody tr");

    $(row).on("click", function() {
        $(".aside-inner").css("right", "0px");
    });

    $(".close-aside").on("click", function() {
        $(".aside-inner").css("right", "-100vw");
    });

    // Transaction log drawer function JS end

    // Arrow rotate on dropdown select picker JS start

    $('.selectpicker').on('shown.bs.select', function(e) {
        $(this).parent().find("button.dropdown-toggle").addClass("rotate-arrow");
    });

    $('.selectpicker').on('hidden.bs.select', function(e) {
        $(this).parent().find("button.dropdown-toggle").removeClass("rotate-arrow");
    });

    // Arrow rotate on dropdown select picker JS end

    $("button.ui-dialog-titlebar-close").html("&times;");

    // Confirm dialog box JS start

    $(function() {
        let dialog;

        $("#confirm-box").button().on("click", function() {
            dialog.dialog("open");
        });

        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: [{
                    text: "Decline",
                    click: function() {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "I understand",
                    "class": 'active',
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ],
            open: function() {
                $('.ui-widget-overlay').click(function() {
                    dialog.dialog('close');
                });
            },
            show: { effect: "drop", direction: "down" },
            hide: { effect: "drop", direction: "down" }
        });

    });

    // Confirm dialog box JS end


});

// Transaction history drawer function JS start

function openTransactionHistory() {
    document.getElementById("transaction-history-popup").style.height = "100vh";
    document.getElementById("main-page").style.marginTop = "-100vh";
}

function closeTransactionHistory() {
    document.getElementById("transaction-history-popup").style.height = "0";
    document.getElementById("main-page").style.marginTop = "0";
}

// Transaction history drawer function JS end