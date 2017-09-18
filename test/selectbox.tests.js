$(function() {

    var SelectBox = selectBox.SelectBox;

    QUnit.module("Core");

    QUnit.test("Assignment default parameters", function( assert ) {
        var selectBox = new SelectBox("#input-selectbox-example");

        assert.equal(selectBox._select[0], $("#input-selectbox-example")[0], "Container/Select saved");

        assert.equal(selectBox._list.is("ul"), true, "Made list done");
        assert.equal(selectBox._list.children().length, 21, "Content list complete");
    });
});
