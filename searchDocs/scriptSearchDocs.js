var userSearch = document.getElementById('inputData'),
    resFound = document.getElementById('foundDocs'),
    docList = ['Renesa@Gymkhana', 'IPL quiz@Sports', 'Photography@FMC', 'Folklore@Udaan', 'codechef@CP', 'Hacktoberfest@noobDev', 'Title@Description'],
    // descList = ['Gymkhana', 'Sports', 'FMC', 'Udaan', 'CP', 'noobDev']
    matches = [],
    posCursor = 0;

userSearch.focus();

userSearch.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
    }
});

userSearch.addEventListener('keyup', function(event) {

    resFound.innerHTML = '';
    toggleresFound('hide');

    if (this.value.length > 0) {
        matches = getMatches(this.value);

        if (matches.length > 0) {
            showMatchedEntries(matches);
        }
    }

    if (resFound.classList.contains('visible')) {
        switch(event.key) {
            case 'Enter':
                userSearch.value = resFound.children[posCursor].innerHTML;
                toggleresFound('hide');
                posCursor = 0;

                break;
            case 'ArrowUp':
                if (posCursor > 0) {
                    posCursor--;

                    moveCursor(posCursor);
                }

                break;
            case 'ArrowDown':
                if (posCursor < (matches.length - 1)) {
                    posCursor++;

                    moveCursor(posCursor);
                }

                break;
        }
    }
});

function getMatches(inpText) {
    var listresFound = [];

    for (var i = 0; i < docList.length; ++i) {
        if (docList[i].toLowerCase().indexOf(inpText.toLowerCase()) != -1) {
            listresFound.push(docList[i]);
        }
    }

    return listresFound;
}

function showMatchedEntries(listresFound) {
    var j = 0;

    while (j < listresFound.length) {
        resFound.innerHTML += '<li class="result">' + listresFound[j] + '</li>';
        j++;
    }

    moveCursor(posCursor);

    toggleresFound('show');
}

function moveCursor(pos) {
    for (var x = 0; x < resFound.children.length; x++) {
        resFound.children[x].classList.remove('highlighted');
    }

    resFound.children[pos].classList.add('highlighted');
}

function toggleresFound(action) {
    if (action == 'show') {
        resFound.classList.add('visible');
    } else if (action == 'hide') {
        resFound.classList.remove('visible');
    }
}