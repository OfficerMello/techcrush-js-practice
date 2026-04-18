function formatName(firstName, lastName) {
  const first = firstName.trim();
  const last = lastName.trim();
  
  const formattedLast = last.toUpperCase();
  const formattedFirst = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  
  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatName(' esther ', ' ogbu '));
