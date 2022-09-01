function hideOnExpanded(targetId, parentId)
{
    var parent = document.getElementById(parentId);
    var target = document.getElementById(targetId);
    if (parent.getAttribute('aria-expanded')) {
        target.classList.add('collapse');
    }
};