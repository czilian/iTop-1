//iTop Search form criteria raw
;
$(function()
{
	// the widget definition, where 'itop' is the namespace,
	// 'search_form_criteria_raw' the widget name
	$.widget( 'itop.search_form_criteria_raw', $.itop.search_form_criteria,
	{
		// default options
		options:
		{
		},
   
		// the constructor
		_create: function()
		{
			var me = this;

			this._super();
			this.element.addClass('search_form_criteria_raw');
		},
		// called when created, and later when changing options
		_refresh: function()
		{

		},
		// events bound via _bind are removed automatically
		// revert other modifications here
		_destroy: function()
		{
			this.element.removeClass('search_form_criteria_raw');
			this._super();
		},
		// _setOptions is called with a hash of all options that are changing
		// always refresh when changing options
		_setOptions: function()
		{
			this._superApply(arguments);
		},
		// _setOption is called for each individual option that is changing
		_setOption: function( key, value )
		{
			this._super( key, value );
		},

		_setTitle: function(sTitle)
		{
			if(sTitle === undefined)
			{
				sTitle = this.options.oql;
			}
			this._super(sTitle);
		},
	});
});