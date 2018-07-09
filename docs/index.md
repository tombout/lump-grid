---
layout: default
---

# Lump Grid

Lump Grid provides almost the same <code>.row</code> and <code>.col</code> classes
as Bootstrap 4.

There is no <code>.container</code> class in this package as this is a wrapper class 
that is not necessarily needed for a grid. The <code>.row</code> itself is a flex container.

## Examples
<style>
        .bg1 {
            background-color: #e0e0e0;
            padding: 4px;
        }
        .bg2 {
            background-color: #aeaeae;
            padding: 4px;
        }
    </style>
<section>
    <h3>Equal Width Columns</h3>
    <p>Use the <code>.col</code> class to let each column have the same width.
    </p>
    <div class="row">
        <div class="bg1 col">
            <p>Gingerbread chupa chups cake carrot cake sweet. Pudding sweet
                brownie toffee marshmallow chocolate pudding danish. Chocolate
                cake marshmallow jelly beans. Apple pie croissant chocolate cake
                donut chocolate apple pie donut powder. Cheesecake bonbon toffee.
                Ice cream gummi bears caramels.</p>
        </div>
        <div class="col bg2">
            <p>Oat cake pie chocolate cake jelly beans ice cream chocolate bar
                jelly gummies. Gummi bears biscuit pie powder ice cream pie
                pudding. Cake oat cake danish. Apple pie oat cake cookie powder
                gummies cheesecake cheesecake bear claw. Gingerbread candy canes
                cheesecake. Biscuit lollipop sugar plum candy liquorice.</p>
        </div>
        <div class="col bg1">
            <p>Soufflé biscuit jelly. Dragée lollipop muffin. Dragée marshmallow
                lemon drops pie tiramisu marzipan brownie. Marshmallow toffee
                dragée croissant cupcake cookie toffee cupcake fruitcake.
                Caramels chocolate topping chocolate cookie jujubes. Topping
                chocolate apple pie cotton candy bonbon candy chupa chups muffin.
                Muffin marzipan brownie wafer chupa chups pastry bonbon tart.</p>
        </div>
    </div>
    <hr>
</section>
<section>
    <h3>Auto Width Columns</h3>
    <p>Use the <code>.col-auto</code> class to let each column have the width it
        needs.</p>
    <div class="row">
        <div class="col-auto bg1"><span>Chocolate cake soufflé icing cheesecake.</span></div>
        <div class="col-auto bg2"><span>Marzipan bear claw apple pie pudding</span></div>
        <div class="col-auto bg1"><span>Cake chocolate bar chocolate chupa chups.</span>
        </div>
    </div>
</section>
<section>
    <h3>Numbered Columns</h3>
    <div class="row">
        <div class="col-12 bg1"><span>.col-12</span></div>
    </div>
    <div class="row">
        <div class="col-11 bg1"><span>.col-11</span></div>
        <div class="col-1 bg2"><span>.col-1</span></div>
    </div>
    <div class="row">
        <div class="col-10 bg1"><span>.col-10</span></div>
        <div class="col-2 bg2"><span>.col-2</span></div>
    </div>
    <div class="row">
        <div class="col-9 bg1"><span>.col-9</span></div>
        <div class="col-3 bg2"><span>.col-3</span></div>
    </div>
    <div class="row">
        <div class="col-8 bg1"><span>.col-8</span></div>
        <div class="col-4 bg2"><span>.col-4</span></div>
    </div>
    <div class="row">
        <div class="col-7 bg1"><span>.col-7</span></div>
        <div class="col-5 bg2"><span>.col-5</span></div>
    </div>
    <div class="row">
        <div class="col-6 bg1"><span>.col-6</span></div>
        <div class="col-6 bg2"><span>.col-6</span></div>
    </div>
    <div class="row">
        <div class="col-5 bg1"><span>.col-5</span></div>
        <div class="col-7 bg2"><span>.col-7</span></div>
    </div>
    <div class="row">
        <div class="col-4 bg1"><span>.col-4</span></div>
        <div class="col-8 bg2"><span>.col-8</span></div>
    </div>
    <div class="row">
        <div class="col-3 bg1"><span>.col-3</span></div>
        <div class="col-9 bg2"><span>.col-9</span></div>
    </div>
    <div class="row">
        <div class="col-2 bg1"><span>.col-2</span></div>
        <div class="col-10 bg2"><span>.col-10</span></div>
    </div>
    <div class="row">
        <div class="col-1 bg1"><span>.col-1</span></div>
        <div class="col-11 bg2"><span>.col-11</span></div>
    </div>
</section>
<section>
    <h3>Responsive Numbered Columns</h3>
    <div class="row">
        <div class="col-lg-11 bg1"><span>.col-11</span></div>
        <div class="col-1 bg2"><span>col-1</span></div>
    </div>
    <div class="row">
        <div class="col-lg-10 bg1"><span>.col-10</span></div>
        <div class="col-2 bg2"><span>.col-2</span></div>
    </div>
    <div class="row">
        <div class="col-lg-9 bg1"><span>.col-9</span></div>
        <div class="col-3 bg2"><span>.col-3</span></div>
    </div>
    <div class="row">
        <div class="col-lg-8 bg1"><span>.col-8</span></div>
        <div class="col-4 bg2"><span>.col-4</span></div>
    </div>
    <div class="row">
        <div class="col-lg-7 bg1"><span>.col-7</span></div>
        <div class="col-5 bg2"><span>.col-5</span></div>
    </div>
    <div class="row">
        <div class="col-lg-6 bg1"><span>.col-6</span></div>
        <div class="col-6 bg2"><span>.col-6</span></div>
    </div>
    <div class="row">
        <div class="col-lg-5 bg1"><span>.col-5</span></div>
        <div class="col-7 bg2"><span>.col-7</span></div>
    </div>
    <div class="row">
        <div class="col-lg-4 bg1"><span>.col-4</span></div>
        <div class="col-8 bg2"><span>.col-8</span></div>
    </div>
    <div class="row">
        <div class="col-lg-3 bg1"><span>.col-3</span></div>
        <div class="col-9 bg2"><span>.col-9</span></div>
    </div>
    <div class="row">
        <div class="col-lg-2 bg1"><span>.col-2</span></div>
        <div class="col-10 bg2"><span>.col-10</span></div>
    </div>
    <div class="row">
        <div class="col-lg-1 bg1"><span>.col-1</span></div>
        <div class="col-11 bg2"><span>.col-11</span></div>
    </div>
</section>
