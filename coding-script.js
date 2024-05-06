function handleStatusClick(status) {
    switch (status) {
      case 'attempt':
        alert('Challenge attempted!');
        break;
      case 'submitted':
      case 'cleared':
      case 'incorrect':
        alert('Question already attempted!');
        break;
      default:
        console.error('Unknown status:', status);
    }
  }
  