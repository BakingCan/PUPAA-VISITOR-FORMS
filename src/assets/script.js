document.addEventListener('DOMContentLoaded', function() {
  //DOM elements
  const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll('.multisteps-form__progress-btn'),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next',
  };

  // Remove class from a set of items
  const removeClasses = (elemSet, className) => {
    elemSet.forEach((elem) => {
      elem.classList.remove(className);
    });
  };

  // Return exact parent node of the element
  const findParent = (elem, parentClass) => {
    let currentNode = elem;
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
    return currentNode;
  };

  // Get active button step number
  const getActiveStep = (elem) => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };

  // Set all steps before clicked (and clicked too) to active
  const setActiveStep = (activeStepNum) => {
    removeClasses(DOMstrings.stepsBtns, 'js-active');
    DOMstrings.stepsBtns.forEach((elem, index) => {
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
      }
    });
  };

  // Get active panel
  const getActivePanel = () => {
    let activePanel;
    DOMstrings.stepFormPanels.forEach((elem) => {
      if (elem.classList.contains('js-active')) {
        activePanel = elem;
      }
    });
    return activePanel;
  };

  // Open active panel (and close unactive panels)
  const setActivePanel = (activePanelNum) => {
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
        elem.classList.add('js-active');
        setFormHeight(elem);
      }
    });
  };

  // Set form height equal to current panel height
  const setFormHeight = () => {
    const activePanel = getActivePanel();
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  };

  // Steps bar click function
  DOMstrings.stepsBar.addEventListener('click', (e) => {
    const eventTarget = e.target;
    if (!eventTarget.classList.contains(DOMstrings.stepsBtnClass)) {
      return;
    }
    const activeStep = getActiveStep(eventTarget);
    setActiveStep(activeStep);
    setActivePanel(activeStep);
  });

  // Prev/Next buttons click
  DOMstrings.stepsForm.addEventListener('click', (e) => {
    const eventTarget = e.target;
    if (
      !(
        eventTarget.classList.contains(DOMstrings.stepPrevBtnClass) ||
        eventTarget.classList.contains(DOMstrings.stepNextBtnClass)
      )
    ) {
      return;
    }
    const activePanel = findParent(
      eventTarget,
      DOMstrings.stepFormPanelClass
    );
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(
      activePanel
    );
    if (eventTarget.classList.contains(DOMstrings.stepPrevBtnClass)) {
      activePanelNum--;
    } else {
      activePanelNum++;
    }
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
  });

  // Setting proper form height on load and resize
  window.addEventListener('load', setFormHeight);
  window.addEventListener('resize', setFormHeight);

  // Changing animation via animation select
  const setAnimationType = (newType) => {
    DOMstrings.stepFormPanels.forEach((elem) => {
      elem.dataset.animation = newType;
    });
  };
});
