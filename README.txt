
-------------------------------------------------------------------------------
Book reader for drupal books for Drupal 6.x
  by Dmitry Storozhuk - dmutro.storozhuk@gmail.com
-------------------------------------------------------------------------------

DESCRIPTION:

Allows users to read books use simple navigation.
-------------------------------------------------------------------------------

INSTALLATION:
* Put the module in your drupal modules directory and enable it in 
  admin/build/modules.
* Download the theme "reader" (link: http://dimasikov.pp.ua/bookreader), extract 
  to the themes folder.

USAGE:
* To enable module functionality use link read/nid. 
  If the node is marked as having a book read on the page will be available on 
  the heads of navigation (the hierarchy of books).
* To open book in a new window, add the class .read-book for link. Thus the 
  book will open in a new window size of 1300 x 800 px.

Normally link should look like: 
 <a href="/read/[nid]" title="read-book" class="read-book"> [Book title] </ a>,
 where [nid] is a node id of book and [Book title] is a title of book.
-------------------------------------------------------------------------------

