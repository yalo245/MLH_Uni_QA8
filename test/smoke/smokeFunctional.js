import sel  from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Required field and story crate', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after field 1-4 are filled in with valid values ', function () {
        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User isdirect  create a story with valid values ', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();


        browser.pause(2000);
        let tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
    });

});
