# Open the **Terminal app**
# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
Marcos-MacBook-Pro:~ marcoriesgo$ cd Desktop
Marcos-MacBook-Pro:Desktop marcoriesgo$ mkdir galaxy_far_far_away
Marcos-MacBook-Pro:Desktop marcoriesgo$ cd galaxy_far_far_away/

# Create a directory called `death_star`
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mkdir death_star

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd death_star/
Marcos-MacBook-Pro:death_star marcoriesgo$ touch darth_vader.txt
Marcos-MacBook-Pro:death_star marcoriesgo$ touch princess_leia.txt
Marcos-MacBook-Pro:death_star marcoriesgo$ touch storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`
Marcos-MacBook-Pro:death_star marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mkdir tatooine

# and create the following files in it:
# luke.txt
# ben_kenobi.txt
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd tatooine
Marcos-MacBook-Pro:tatooine marcoriesgo$ touch luke.txt
Marcos-MacBook-Pro:tatooine marcoriesgo$ touch ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
Marcos-MacBook-Pro:tatooine marcoriesgo$ mkdir millenium_falcon
Marcos-MacBook-Pro:tatooine marcoriesgo$ cd millenium_falcon/
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ touch han_solo.txt
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ touch chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ cd ..
Marcos-MacBook-Pro:tatooine marcoriesgo$ mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`
Marcos-MacBook-Pro:tatooine marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd death_star
Marcos-MacBook-Pro:death_star marcoriesgo$ cp storm_trooper.txt ../tatooine

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
Marcos-MacBook-Pro:tatooine marcoriesgo$ mv luke.txt millenium_falcon
Marcos-MacBook-Pro:tatooine marcoriesgo$ mv obi_wan.txt millenium_falcon

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
Marcos-MacBook-Pro:tatooine marcoriesgo$ mv millenium_falcon ..

# Move `millenium_falcon` into `death_star`
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mv millenium_falcon death_star

# Move `princess_leia.txt` into the `millenium_falcon`
Marcos-MacBook-Pro:death_star marcoriesgo$ mv princess_leia.txt millenium_falcon

# Delete `obi_wan.txt`
Marcos-MacBook-Pro:death_star marcoriesgo$ cd millenium_falcon
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ rm obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ cd ..
Marcos-MacBook-Pro:death_star marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd death_star
Marcos-MacBook-Pro:death_star marcoriesgo$ mv millenium_falcon ../yavin_4

# Make a directory in `yavin_4` called `x_wing`
Marcos-MacBook-Pro:death_star marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd yavin_4
Marcos-MacBook-Pro:yavin_4 marcoriesgo$ mkdir x_wing

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
Marcos-MacBook-Pro:yavin_4 marcoriesgo$ cd millenium_falcon
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ mv princess_leia.txt ..
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ mv luke.txt ../x_wing
Marcos-MacBook-Pro:millenium_falcon marcoriesgo$ cd ..

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
Marcos-MacBook-Pro:yavin_4 marcoriesgo$ mv millenium_falcon ..
Marcos-MacBook-Pro:yavin_4 marcoriesgo$ mv x_wing ..

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd death_star/
Marcos-MacBook-Pro:death_star marcoriesgo$ mkdir tie_fighter_1
Marcos-MacBook-Pro:death_star marcoriesgo$ mkdir tie_fighter_2
Marcos-MacBook-Pro:death_star marcoriesgo$ mkdir tie_fighter_3

# Move `darth_vader.txt` into `tie_fighter_1`
Marcos-MacBook-Pro:death_star marcoriesgo$ mv darth_vader.txt tie_fighter_1

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
Marcos-MacBook-Pro:death_star marcoriesgo$ cp storm_trooper.txt tie_fighter_2
Marcos-MacBook-Pro:death_star marcoriesgo$ cp storm_trooper.txt tie_fighter_3

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
Marcos-MacBook-Pro:death_star marcoriesgo$ mv tie_fighter_1 ..
Marcos-MacBook-Pro:death_star marcoriesgo$ mv tie_fighter_2 ..
Marcos-MacBook-Pro:death_star marcoriesgo$ mv tie_fighter_3 ..

# Be careful with this command - cannot undo!
# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).
# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete
# Remove `tie_fighters` 2 and 3.
Marcos-MacBook-Pro:death_star marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ rm -r tie_fighter_2
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ rm -r tie_fighter_3

# Touch a file in "**x_wing**" called "**the_force.txt**".
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ cd x_wing/
Marcos-MacBook-Pro:x_wing marcoriesgo$ touch the_force.txt

# Destroy the "**death_star**" and anyone inside of it.
Marcos-MacBook-Pro:x_wing marcoriesgo$ cd ..
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ rm -r death_star/

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mv millenium_falcon yavin_4/
Marcos-MacBook-Pro:galaxy_far_far_away marcoriesgo$ mv x_wing yavin_4/
# Celebrate!