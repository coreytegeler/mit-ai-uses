document.addEventListener('DOMContentLoaded', function() {
  var Point, azure, cellObjs, clearCells, clickEyeCell, clickPanel, closePanel, eyes, field, fillCells, getPosition, getRelativePoint, gold, green, grid, gridWrap, openPanel, orange, panelTitles, panels, pink, purple, setupGrid, setupPanels, trackEyes, violet, wrapper;
  wrapper = document.getElementById('state-of-ai');
  gridWrap = document.getElementById('ai-grid-wrap');
  grid = document.getElementById('ai-grid');
  panels = document.querySelectorAll('.ai-view-panel');
  panelTitles = document.querySelectorAll('.ai-view-title');
  field = grid;
  azure = '#009bff';
  green = '#009e20';
  pink = '#ff00c6';
  orange = '#ff6c00';
  purple = '#3e35f9';
  gold = '#b9b900';
  violet = '#9400ff';
  eyes = [];
  cellObjs = {
    91: {
      color: azure,
      left: {
        percent: 58,
        coords: [6, 15, 16, 17, 21, 22, 23, 24, 27, 29, 31, 32, 33, 38, 40, 43, 44, 45, 46, 47, 49, 53, 54, 56, 57, 59, 60, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 80, 81, 82, 83, 84, 87, 88, 90, 92, 93, 94, 96],
        label: 'Natural language processing/</br>generation (NLP/G)',
        define: 'extracts or generates meaning and intent from text in a readable, stylistically natural, and grammatically correct form.'
      },
      right: {
        percent: 31,
        coords: [11, 21, 24, 25, 31, 33, 34, 35, 42, 43, 44, 45, 46, 52, 53, 54, 61, 62, 63, 64, 65, 66, 71, 72, 74, 75, 81, 82, 92],
        label: '"Technologies are immature."'
      }
    },
    10: {
      color: green,
      left: {
        percent: 34,
        coords: [9, 17, 18, 19, 20, 28, 29, 30, 36, 37, 38, 39, 40, 45, 46, 47, 54, 56, 57, 58, 59, 60, 65, 67, 68, 69, 70, 77, 78, 79, 80, 88, 89],
        label: 'Deep learning',
        define: 'is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks.'
      },
      right: {
        percent: 40,
        coords: [6, 9, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 37, 38, 39, 40, 45, 46, 49, 50, 54, 56, 59, 60, 65, 67, 68, 69, 70, 76, 77, 79, 80, 86, 89, 90, 99],
        label: '“...too expensive.”'
      }
    },
    13: {
      color: pink,
      left: {
        percent: 59,
        coords: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 28, 31, 32, 33, 35, 36, 37, 41, 42, 43, 44, 45, 46, 47, 49, 52, 53, 56, 57, 61, 62, 63, 65, 66, 72, 73, 74, 76, 77, 78, 79, 82, 83, 85, 86, 95],
        label: 'Robotic process automation',
        define: 'automates repetitive processes performed by people – things like opening email attachments, completing e-forms, entering data.'
      },
      right: {
        percent: 37,
        coords: [4, 5, 7, 12, 14, 15, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 35, 37, 42, 44, 45, 46, 54, 64, 65, 66, 73, 75, 76, 84, 85, 86, 94, 95],
        label: '“Managers don’t understand...”'
      }
    },
    48: {
      color: orange,
      left: {
        percent: 32,
        coords: [26, 28, 29, 34, 37, 39, 40, 45, 46, 47, 49, 50, 54, 57, 59, 63, 65, 66, 67, 68, 69, 70, 73, 75, 76, 77, 78, 79, 80, 85, 88],
        label: 'Physical robots',
        define: 'can perform many different tasks in unpredictable environments, often working alongside human workers.'
      },
      right: {
        percent: 47,
        coords: [3, 6, 8, 9, 14, 16, 19, 20, 25, 27, 28, 29, 30, 37, 38, 39, 40, 45, 47, 49, 50, 54, 56, 57, 58, 59, 60, 64, 66, 68, 69, 70, 75, 77, 78, 79, 80, 86, 87, 88, 89, 90, 95, 97, 99, 100],
        label: '"Difficult to integrate..."'
      }
    },
    55: {
      color: purple,
      left: {
        percent: 49,
        coords: [5, 6, 7, 8, 9, 14, 16, 17, 18, 23, 25, 26, 27, 28, 29, 30, 34, 36, 37, 38, 39, 44, 45, 46, 47, 49, 53, 56, 57, 58, 65, 66, 67, 68, 69, 70, 74, 76, 77, 78, 84, 85, 87, 88, 89, 92, 93, 94, 95],
        label: 'Rules-based systems',
        define: 'use databases of knowledge and rules to automate the process of making inferences about information.'
      },
      right: {
        percent: 35,
        coords: [2, 11, 12, 14, 21, 22, 24, 25, 31, 33, 34, 35, 37, 42, 43, 44, 45, 46, 52, 53, 54, 56, 57, 61, 62, 63, 64, 65, 66, 71, 74, 75, 76, 86],
        label: '"Can\'t get enough people with expertise..."'
      }
    },
    51: {
      color: gold,
      left: {
        percent: 58,
        coords: [1, 2, 3, 4, 7, 11, 12, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 36, 38, 42, 43, 44, 45, 47, 52, 53, 54, 56, 61, 62, 63, 64, 65, 66, 67, 71, 72, 73, 74, 75, 77, 81, 82, 83, 84, 85, 87, 93, 94, 95],
        label: 'Statistical machine learning',
        define: 'is the ability of statistical models to improve their performance over time without the need for explicitly programmed instructions.'
      },
      right: {
        percent: 18,
        coords: [12, 22, 32, 33, 35, 42, 43, 44, 52, 53, 54, 61, 62, 64, 72, 73, 82, 83],
        label: '"Technologies have been oversold..."'
      }
    },
    98: {
      color: violet,
      left: {
        percent: 2,
        coords: [99],
        label: 'None',
        define: ''
      },
      right: {
        percent: 6,
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
      var cell, cellObj, fill, isEye, leftLabel, pupil, rightLabel;
      cell = document.createElement('div');
      cell.classList.add('ai-cell');
      cell.dataset.index = i;
      isEye = cellObjs.hasOwnProperty(i);
      if (isEye) {
        cellObj = cellObjs[i];
        cell.classList.add('ai-eye');
        cell.addEventListener('click', clickEyeCell);
        fill = document.createElement('div');
        fill.classList.add('ai-fill');
        fill.style.background = cellObj.color;
        pupil = document.createElement('div');
        pupil.classList.add('ai-pupil');
        leftLabel = document.createElement('div');
        leftLabel.classList.add('ai-tooltip', 'ai-left');
        leftLabel.innerHTML = cellObj.left.label;
        rightLabel = document.createElement('div');
        rightLabel.classList.add('ai-tooltip', 'ai-right');
        rightLabel.innerHTML = cellObj.right.label;
        cell.innerHTML += fill.outerHTML + pupil.outerHTML + leftLabel.outerHTML + rightLabel.outerHTML;
      }
      cell = grid.appendChild(cell);
      if (isEye) {
        eyes.push(cell);
      }
      return window.addEventListener('mousemove', trackEyes);
    });
  };
  clickEyeCell = function(e) {
    var index, otherCell, otherStats, panel, stats, theseStats, view;
    index = this.dataset.index;
    view = grid.dataset.view;
    if (index === grid.dataset.index) {
      grid.dataset.index = '';
      grid.classList.remove('ai-cell-active');
      this.classList.remove('ai-active');
      theseStats = document.querySelectorAll('.ai-stats[data-index="' + index + '"]');
      [].forEach.call(theseStats, function(thisStats, i) {
        return thisStats.classList.remove('ai-active');
      });
      return clearCells();
    }
    if (!view) {
      panel = document.querySelector('.ai-view-panel.ai-left');
      openPanel(panel);
    } else {
      panel = document.querySelector('.ai-view-panel.ai-' + view);
    }
    if (otherStats = document.querySelectorAll('.ai-stats.ai-active')) {
      [].forEach.call(otherStats, function(thisStats, i) {
        return thisStats.classList.remove('ai-active');
      });
    }
    if (otherCell = document.querySelector('.ai-cell.ai-active')) {
      otherCell.classList.remove('ai-active');
    }
    stats = document.querySelectorAll('.ai-stats[data-index="' + index + '"]');
    [].forEach.call(stats, function(stat, i) {
      return stat.classList.add('ai-active');
    });
    grid.dataset.index = index;
    grid.classList.add('ai-cell-active');
    this.classList.add('ai-active');
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
    eyeKey = cellObjs[index];
    coords = eyeKey[view].coords;
    color = eyeKey.color;
    results = [];
    for (j = 0, len = coords.length; j < len; j++) {
      i = coords[j];
      cell = grid.querySelector('.ai-cell[data-index="' + i + '"]');
      cell.style.background = color;
      results.push(cell.classList.add('ai-filled'));
    }
    return results;
  };
  clearCells = function() {
    var filledCells;
    filledCells = document.getElementsByClassName('ai-filled');
    return [].forEach.call(filledCells, function(cell, i) {
      return cell.style = '';
    });
  };
  setupPanels = function() {
    ['left', 'right'].forEach(function(view, i) {
      var inner;
      inner = document.querySelector('.ai-' + view + ' .ai-view-inner');
      return Object.entries(cellObjs).forEach(function(cellObj, i) {
        var define, label, percent, props, stats;
        stats = document.createElement('div');
        stats.dataset.index = cellObj[0];
        stats.classList.add('ai-stats');
        stats.style.color = cellObj[1].color;
        props = cellObj[1][view];
        percent = document.createElement('h2');
        percent.classList.add('ai-percent');
        percent.innerHTML = props.percent + '%';
        label = document.createElement('div');
        label.classList.add('ai-label');
        label.innerHTML = props.label;
        stats.innerHTML += percent.outerHTML + label.outerHTML;
        if (props.define) {
          define = document.createElement('div');
          define.classList.add('ai-define');
          define.innerHTML = props.define;
          stats.appendChild(define);
        }
        return inner.appendChild(stats);
      });
    });
    return [].forEach.call(panelTitles, function(panelTitle, i) {
      return panelTitle.addEventListener('click', clickPanel);
    });
  };
  clickPanel = function() {
    var panel;
    panel = this.parentElement;
    if (panel.classList.contains('ai-active')) {
      return closePanel(panel);
    } else {
      return openPanel(panel);
    }
  };
  openPanel = function(panel) {
    var otherPanel, view;
    view = panel.dataset.view;
    otherPanel = document.querySelectorAll('.ai-view-panel:not(.ai-' + view + ')');
    if (otherPanel.length) {
      otherPanel[0].classList.remove('ai-active');
    }
    panel.classList.add('ai-active');
    grid.dataset.view = view;
    clearCells();
    return fillCells();
  };
  closePanel = function(panel) {
    grid.dataset.view = '';
    grid.dataset.index = '';
    grid.classList.remove('ai-cell-active');
    panel.classList.remove('ai-active');
    return clearCells();
  };
  Point = function(x, y) {
    this.x = x;
    this.y = y;
    this.add = function(w) {
      this.x += w.x;
      this.y += w.y;
      return this;
    };
    this.min = function(w) {
      this.x -= w.x;
      this.y -= w.y;
      return this;
    };
  };
  getRelativePoint = function(m, deg, dist) {
    return new Point(m.x + Math.cos(Math.radians(deg)) * dist, m.y + Math.sin(Math.radians(deg)) * dist);
  };
  trackEyes = function(e) {
    var clientX, clientY, cursor, scrollY;
    scrollY = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
    clientX = e.clientX;
    clientY = e.clientY + scrollY;
    cursor = new Point(clientX, clientY);
    return eyes.forEach(function(eye, i) {
      var degrees, distance, eyeMid, eyePosition, minus, newPupil, pupil;
      eyePosition = getPosition(eye);
      eyeMid = new Point(eye.offsetWidth / 2, eye.offsetWidth / 2);
      pupil = eye.querySelector('.ai-pupil');
      degrees = Math.getDegBetween(eyePosition, cursor);
      distance = eye.offsetWidth / 2 - (pupil.offsetWidth / 2);
      newPupil = getRelativePoint(eyeMid, degrees, distance);
      minus = new Point(pupil.offsetWidth / 2, pupil.offsetWidth / 2);
      newPupil.min(minus);
      pupil.style.top = newPupil.y + 'px';
      return pupil.style.left = newPupil.x + 'px';
    });
  };
  getPosition = function(el) {
    var x, y;
    x = 0;
    y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return new Point(x, y);
  };
  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };
  Math.getDegBetween = function(a, b) {
    var deg;
    deg = Math.degrees(Math.atan2(a.x - b.x, a.y - b.y)) * -1 - 90;
    if (deg < 0) {
      return 360 + deg;
    } else {
      return deg;
    }
  };
  setupPanels();
  return setupGrid();
});
