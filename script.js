document.addEventListener('DOMContentLoaded', function() {
  var activatePanels, azure, callObjs, clearCells, clickEyeCell, clickPanel, fillCells, gold, green, grid, main, orange, panelTitles, panels, pink, purple, setupGrid, violet;
  main = document.getElementsByTagName('main')[0];
  grid = document.getElementById('ai-grid');
  panels = document.querySelectorAll('.ai-view-panel');
  panelTitles = document.querySelectorAll('.ai-view-title');
  azure = '#009bff';
  green = '#009e20';
  pink = '#ff00c6';
  orange = '#ff6c00';
  purple = '#3e35f9';
  gold = '#b9b900';
  violet = '#9400ff';
  callObjs = {
    91: {
      color: azure,
      left: {
        coords: [6, 15, 16, 17, 21, 22, 23, 24, 27, 29, 31, 32, 33, 38, 40, 43, 44, 45, 46, 47, 49, 53, 54, 56, 57, 59, 60, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 80, 81, 82, 83, 84, 87, 88, 90, 92, 93, 94, 96],
        label: 'Natural language processing/generation (NLP/G)'
      },
      right: {
        coords: [11, 21, 24, 25, 31, 33, 34, 35, 42, 43, 44, 45, 46, 52, 53, 54, 61, 62, 63, 64, 65, 66, 71, 72, 74, 75, 81, 82, 92],
        label: '"Technologies are immature."'
      }
    },
    10: {
      color: green,
      left: {
        coords: [9, 17, 18, 19, 20, 28, 29, 30, 36, 37, 38, 39, 40, 45, 46, 47, 54, 56, 57, 58, 59, 60, 65, 67, 68, 69, 70, 77, 78, 79, 80, 88, 89],
        label: 'Deep learning'
      },
      right: {
        coords: [6, 9, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 37, 38, 39, 40, 45, 46, 49, 50, 54, 56, 59, 60, 65, 67, 68, 69, 70, 76, 77, 79, 80, 86, 89, 90, 99],
        label: '“...too expensive.”'
      }
    },
    13: {
      color: pink,
      left: {
        coords: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 28, 31, 32, 33, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 49, 52, 53, 56, 57, 61, 62, 63, 65, 66, 72, 73, 74, 76, 77, 78, 79, 82, 83, 85, 86, 95],
        label: 'Robotic process automation'
      },
      right: {
        coords: [4, 5, 7, 12, 14, 15, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 37, 42, 44, 45, 46, 54, 64, 65, 66, 73, 75, 76, 84, 85, 86, 94, 95],
        label: '“Managers don’t understand...”'
      }
    },
    48: {
      color: orange,
      left: {
        coords: [26, 28, 29, 34, 37, 39, 40, 45, 46, 47, 49, 50, 54, 57, 59, 63, 65, 66, 67, 68, 69, 70, 73, 75, 76, 77, 78, 79, 80, 85, 88],
        label: 'Physical robots'
      },
      right: {
        coords: [3, 6, 8, 9, 14, 16, 19, 20, 25, 27, 28, 29, 30, 37, 38, 39, 40, 45, 47, 49, 50, 54, 56, 57, 58, 59, 60, 64, 66, 68, 69, 70, 75, 77, 78, 79, 80, 86, 87, 88, 89, 90, 95, 97, 99, 100],
        label: '"Difficult to integrate..."'
      }
    },
    55: {
      color: purple,
      left: {
        coords: [5, 6, 7, 8, 9, 14, 16, 17, 18, 23, 25, 26, 27, 28, 29, 30, 34, 36, 37, 38, 39, 44, 45, 46, 47, 49, 53, 56, 57, 58, 65, 66, 67, 68, 69, 70, 74, 76, 77, 78, 84, 85, 87, 88, 89, 92, 93, 94, 95],
        label: 'Rules-based systems'
      },
      right: {
        coords: [2, 11, 12, 14, 21, 22, 24, 25, 31, 33, 34, 35, 37, 42, 43, 44, 45, 46, 52, 53, 54, 56, 57, 61, 62, 63, 64, 65, 66, 71, 74, 75, 76, 86],
        label: '"Can\'t get enough people with expertise..."'
      }
    },
    51: {
      color: gold,
      left: {
        coords: [1, 2, 3, 4, 7, 11, 12, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 36, 38, 42, 43, 44, 45, 47, 52, 53, 54, 56, 61, 62, 63, 64, 65, 66, 67, 71, 72, 73, 74, 75, 77, 81, 82, 83, 84, 85, 87, 93, 94, 95],
        label: 'Statistical machine learning'
      },
      right: {
        coords: [12, 22, 32, 33, 35, 42, 43, 44, 52, 53, 54, 61, 62, 64, 72, 73, 82, 83],
        label: '"Technologies have been oversold..."'
      }
    },
    98: {
      color: violet,
      left: {
        coords: [99],
        label: 'None'
      },
      right: {
        coords: [77, 78, 87, 88, 99],
        label: '"None of these."'
      }
    }
  };
  setupGrid = function() {
    var j, results;
    return (function() {
      results = [];
      for (j = 1; j <= 100; j++){ results.push(j); }
      return results;
    }).apply(this).forEach(function(i) {
      var cell, cellObj;
      cell = document.createElement('div');
      cell.classList.add('ai-cell');
      cell.dataset.index = i;
      cell = grid.appendChild(cell);
      if (callObjs.hasOwnProperty(i)) {
        cellObj = callObjs[i];
        cell.classList.add('ai-eye');
        cell.style.background = cellObj.color;
        cell.innerHTML = '<div class="ai-pupil"><div>';
        return cell.addEventListener('click', clickEyeCell);
      }
    });
  };
  clickEyeCell = function(e) {
    if (!grid.dataset.view) {
      return;
    }
    grid.dataset.index = this.dataset.index;
    clearCells();
    return fillCells();
  };
  fillCells = function() {
    var cell, color, coords, eyeKey, i, index, j, len, results, view;
    index = grid.dataset.index;
    view = grid.dataset.view;
    if (!view || !index) {
      return;
    }
    eyeKey = callObjs[index];
    coords = eyeKey[view].coords;
    color = eyeKey.color;
    results = [];
    for (j = 0, len = coords.length; j < len; j++) {
      i = coords[j];
      cell = grid.querySelector('.ai-cell[data-index="' + i + '"]');
      cell.style.background = color;
      results.push(cell.classList.add('ai-temp'));
    }
    return results;
  };
  clearCells = function() {
    var tempCells;
    tempCells = document.getElementsByClassName('ai-temp');
    return [].forEach.call(tempCells, function(cell, i) {
      return cell.style = '';
    });
  };
  activatePanels = function() {
    return [].forEach.call(panelTitles, function(panelTitle, i) {
      return panelTitle.addEventListener('click', clickPanel);
    });
  };
  clickPanel = function() {
    var otherPanel, panel, view;
    panel = this.parentElement;
    view = panel.dataset.view;
    otherPanel = document.querySelectorAll('.ai-view-panel:not(.ai-' + view + ')');
    if (panel.classList.contains('ai-active')) {
      panel.classList.remove('ai-active');
      grid.dataset.view = '';
    } else {
      if (otherPanel.length) {
        otherPanel[0].classList.remove('ai-active');
      }
      panel.classList.add('ai-active');
      grid.dataset.view = view;
    }
    clearCells();
    return fillCells();
  };
  activatePanels();
  return setupGrid();
});
