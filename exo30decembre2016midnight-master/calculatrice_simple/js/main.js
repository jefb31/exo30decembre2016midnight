

function calculette () 
{

	that = this,         /* that declaré egal a this est utilisé pour déclarer une instance de notre class et pas une instance jquery */
	this.field = "input.number",
	this.button = "#corps .buttons",
	this.init = false,

	this.run = function() 
	{
		$(this.button).click(function() {
			var value = $(this).html();

			if (that.init == false)
			{
				$(that.field).val("");
				that.init = true;

			}

			$(that.field).val($(that.field).val() + value);    /* that declaré egal a this donne ici that.field utilisé pour déclarer une instance de notre clas et pas une instance jquery */      
		});

	},

	this.dispatcher = function(value)
	{

	},

	this.operation = function(value, symbol)
	{

	};

}























