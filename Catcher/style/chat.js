    $(document).ready(function()
	{
        $(".sbbt").click(function()
        {

        var inpt=$("#new2").val();

            $(".append").append("<p>"+inpt+"</p>")
            $("#new2").val(null);
        })
	})



