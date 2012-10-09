<?php
/**
 * * Available variables:
 * - $tree: The immediate children of the current node rendered as an
 *   unordered list.
 * - $current_depth: Depth of the current node within the book outline.
 *   Provided for context.
 * - $prev_url: URL to the previous node.
 * - $prev_title: Title of the previous node.
 * - $parent_url: URL to the parent node.
 * - $parent_title: Title of the parent node. Not printed by default. Provided
 *   as an option.
 * - $next_url: URL to the next node.
 * - $next_title: Title of the next node.
 * - $has_links: Flags TRUE whenever the previous, parent or next data has a
 *   value.
 * - $book_id: The book ID of the current outline being viewed. Same as the
 *   node ID containing the entire outline. Provided for context.
 * - $book_url: The book/node URL of the current outline being viewed.
 *   Provided as an option. Not used by default.
 * - $book_title: The book/node title of the current outline being viewed.
 *   Provided as an option. Not used by default.
 *
 * - $blocks - array of text blocks with valid html output
 * - $book_menu_tree - book hierarchy
 *
 * @see template_preprocess_book_chapter()
 */
?>


  <div id="book-wrapper" class="book-block">
    <?php if(count($blocks) > 1): ?>
      <div href="" class="next-prec-rows" id="prev"></div>
      <div href="" class="next-prec-rows" id="next"></div>
    <?php endif; ?>

    <div id="book-toolbar">
      <?php if($edit_link) { print $edit_link;} ?>
      <div id="show-hide-tolbar-btn"></div>
      <?php if($book_menu_tree): ?>
	      <div id="book-menu-tree-wrapper">
	        <h2><?php print ($parent_title) ? $parent_title : $book_title ;?></h2>
	        <?php print $book_menu_tree;?>
	      </div>
      <?php endif; ?>
      
      <div id="slider-wrapper">
      
        <div id="font-small" class="slide-inside"></div>
        <div class="slide-inside">
          <div id="slider-left-coner"></div>
          <div id="slider"></div>
          <div id="slider-right-coner"></div>
        </div>
        <div id="font-large" class="slide-inside"></div>
      
      </div> <!-- /slider-wrapper -->
      
      <?php if($book_menu_tree): ?><div id="chapters-btn"><?php print t('Chapters'); ?></div><?php endif; ?>
      
    </div> <!-- /book-toolbar -->

    <?php if($blocks): ?>
    <div id="book">

      <?php foreach ($blocks as $block_number => $block): ?>

      <div id="book-block-<?php print $block_number;?>" class="book-block">
        <?php foreach ($block as $page_number => $page): ?>
        <div id="book-page-<?php print $block_number.$page_number;?>" class="book-page hyphenate <?php print $page_number == 1 ? "even"  : "odd";?>">
          <?php print $page;?>
        </div>
        <?php endforeach; ?>

      </div> <!-- /book-block -->
      <?php endforeach; ?>

    </div> <!-- /book -->

      <?php if($tree): ?>
        <div id="table-of-contents" class="clear-block">
          <h3><?php print t('Contents');?></h3>
          <?php print $book_menu_tree; ?>
        </div>
      <?php endif; ?>

    <?php endif; ?>

  </div>

    <div id="book-statusbar">

        <div id="book-navigation-<?php print $book_id; ?>" class="book-navigation">
          <div class="page-links clear-block">
          	<?php if ($has_links): ?>
	            <?php if ($prev_url) : ?>
	              <a href="<?php print $prev_url; ?>" class="page-previous" title="<?php print t('Go to previous page'); ?>"><?php print t('‹ ') . $prev_title; ?></a>
	            <?php endif; ?>
	            <?php if ($parent_url) : ?>
	              <a href="<?php print $parent_url; ?>" class="page-up" title="<?php print t('Go to parent page'); ?>"><?php print t('up'); ?></a>
	            <?php endif; ?>
	            <?php if ($next_url) : ?>
	              <a href="<?php print $next_url; ?>" class="page-next" title="<?php print t('Go to next page'); ?>"><?php print $next_title . t(' ›'); ?></a>
	            <?php endif; ?>
						<?php  endif; ?>      
          </div>
        </div>
      
      <?php if(count($blocks) > 1): ?>
      <div id="show-hide-statusbar-bar-btn"></div>
        <div id="slider-wrapper-nav">

            <div id="slider-left-coner"></div>
            <div id="slider-nav"></div>
            <div id="slider-right-coner"></div>

        </div>
      <?php endif; ?>

    </div> <!-- /book-statusbar -->

<?php
$max_nav = count($blocks);
drupal_add_js("
  $(document).ready(function() {
    $('#slider-nav').slider({
            min: 1,
            max: $max_nav,
            step: 1,
            slide: function( event, ui ) {
                $('#nav a').slice(ui.value-1,ui.value).trigger('click');
            }
        });
      });   ",'inline');
?>
