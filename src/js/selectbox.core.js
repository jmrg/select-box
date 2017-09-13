(function(window, $, undefined) {

    /**
     * @param select {String}
     * @constructor
     */
    function SelectBox(select) {
        this._select = $(select);
        this._list = null;

        this.render();
    }

    SelectBox.prototype = {
        render: function () {
            this._list = this._generateList(this._select);
            console.log(this._list);
        },

        /**
         * Return a list with the tag <ul/>.
         *
         * @param element {jQuery}
         * @returns {HTMLElement}
         * @private
         */
        _generateList: function (element) {
            var list = $("<ul>"),
                children = element.children();

            children.each($.proxy(function (pos, item) {
                var $item = $(item);

                if ($item.is("optgroup")) {
                    list.append(this._createSublist($item));
                } else {
                    list.append(this._createItemList($item));
                }
            }, this));

            return list;
        },

        /**
         * Return a list with the tag <ul/> into
         * tag <li/>.
         *
         * @param element {jQuery}
         * @returns {HTMLElement}
         * @private
         */
        _createSublist: function (element) {
            var li = $("<li>"),
                label = $("<strong>");

            label.html(element.attr("label"));

            li.append(label)
                .append(this._generateList(element));

            return li;
        },

        /**
         * Return item <li/> with the date element
         * supplied.
         *
         * @param element {jQuery}
         * @returns {HTMLElement}
         * @private
         */
        _createItemList: function (element) {
            var li = $("<li>")
                .html(element.html());

            return li;
        }
    };

    window.selectBox = {
        SelectBox: SelectBox
    };

}(window, jQuery));
