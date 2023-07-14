// priority: 0

ServerEvents.recipes((event) => {
  let list = [
    "v_slab_compat:betterend/azure_jadestone_vertical_slab",
    "v_slab_compat:betterend/virid_jadestone_bricks_vertical_slab",
    "v_slab_compat:betterend/virid_jadestone_vertical_slab",
    "v_slab_compat:betterend/sulphuric_rock_bricks_vertical_slab",
    "v_slab_compat:betterend/sulphuric_rock_vertical_slab",
    "v_slab_compat:betterend/violecite_bricks_vertical_slab",
    "v_slab_compat:betterend/violecite_vertical_slab",
    "v_slab_compat:betterend/flavolite_bricks_vertical_slab",
    "v_slab_compat:betterend/flavolite_vertical_slab",
    "v_slab_compat:betterend/lacugrove_vertical_slab",
    "v_slab_compat:betterend/pythadendron_vertical_slab",
    "v_slab_compat:betterend/end_lotus_vertical_slab",
    "v_slab_compat:betterend/mossy_glowshroom_vertical_slab",
    "v_slab_compat:betterend/umbralith_bricks_vertical_slab",
    "v_slab_compat:betterend/sandy_jadestone_bricks_vertical_slab",
    "v_slab_compat:betterend/umbralith_vertical_slab",
    "v_slab_compat:betterend/sandy_jadestone_vertical_slab",
    "v_slab_compat:betterend/azure_jadestone_bricks_vertical_slab",
    "v_slab_compat:betterend/smaragdant_crystal_bricks_vertical_slab",
    "v_slab_compat:betterend/smaragdant_crystal_vertical_slab",
    "v_slab_compat:betterend/jellyshroom_vertical_slab",
    "v_slab_compat:betterend/lucernia_vertical_slab",
    "v_slab_compat:betterend/umbrella_tree_vertical_slab",
    "v_slab_compat:betterend/helix_tree_vertical_slab",
    "v_slab_compat:betterend/tenanea_vertical_slab",
    "v_slab_compat:betterend/dragon_tree_vertical_slab",
  ];
  for (let i = 0; i < list.length; i++) {
    event.remove({ output: list[i] });
  }
});
