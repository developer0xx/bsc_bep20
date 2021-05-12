$(document).ready(function() {
    // Aside drawer JS start

    let row = $("#services-tabContent .table tbody tr");

    $(row).on("click", function() {
        $(".floating-btns").hide();
        $(".aside-inner").css("right", "0px");
        $(".aside").css({
            "background": "rgba(0, 0, 0, 0)",
            "width": "100%",
            "height": "100%",
            "position": "absolute",
            "z-index": "10",
            "top": "0"
        });
        $(this).find(".arrow-icon").css({
            "background": "url('assets/images/bx-chevron-down-pink.svg') no-repeat",
            "background-position": "center center",
            "background-size": "contain",
            "width": "24px",
            "height": "24px",
            "display": "inline-block",
            "margin-right": "10px",
            "float": "right"
        });
        $(this).css({
            "background": "linear-gradient(90deg, rgba(255,255,255,1) 35%, rgba(124,121,128,0.4) 300%)",
            "border-top": "2px solid #7C7980",
            "border-bottom": "2px solid #7C7980"
        });
    });

    $(".close-aside").on("click", function() {
        $(".aside-inner").css("right", "-575px");
        $(".aside").css({
            "background": "inherit",
            "width": "inherit",
            "height": "inherit",
            "position": "inherit",
            "z-index": "inherit",
            "top": "inherit"
        });
        $(".arrow-icon").css({
            "background": "url('assets/images/bx-chevron-down.svg') no-repeat",
            "background-position": "center center",
            "background-size": "contain",
            "width": "24px",
            "height": "24px",
            "display": "inline-block",
            "margin-right": "10px",
            "float": "right"
        });
        $("#services-tabContent .table tbody tr").css({
            "background": "transparent",
            "border-top": "none",
            "border-bottom": "1px solid #C7C2CC"
        });
        $(".floating-btns").show();
    });

    // Aside drawer JS end

    // Arrow rotate on dropdown select picker JS start

    $('.selectpicker').on('shown.bs.select', function(e) {
        $("button.dropdown-toggle").addClass("rotate-arrow");
    });

    $('.selectpicker').on('hidden.bs.select', function(e) {
        $("button.dropdown-toggle").removeClass("rotate-arrow");
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